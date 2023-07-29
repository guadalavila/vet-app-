export type Report = {
    gender: ReportData;
    specie: ReportData;
    vaccines: number;
    visits: number;
};

type ReportData = {
    serie: number[];
    serieColor: string[];
    serieText: string[];
};
