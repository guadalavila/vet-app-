class AppEventsHandler<EventType> {
    // eslint-disable-next-line prettier/prettier
    private subscribers: Record<keyof EventType, Set<(data: EventType[any]) => void>> = {} as any;

    listen<K extends keyof EventType>(type: K, cb: (data: EventType[K]) => void): () => void {
        if (!this.subscribers[type]) {
            this.subscribers[type] = new Set([]);
        }
        if (this.subscribers[type].has(cb)) {
            return () => {
                this.subscribers[type].delete(cb);
            };
        }
        this.subscribers[type].add(cb);
        return () => {
            this.subscribers[type].delete(cb);
        };
    }

    publish<K extends keyof EventType>(type: K, data: EventType[K]): void {
        if (!this.subscribers[type]) {
            return;
        }
        this.subscribers[type].forEach((cb) => {
            cb(data);
        });
    }
}
export default AppEventsHandler;
