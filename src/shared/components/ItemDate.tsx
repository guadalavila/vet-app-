import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_CUSTOM_CALENDAR, colors } from '../utils/colors';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { CONFIG_MONTHS_DAYS, LOCALE_CONFIG } from '../utils/calendar';
import { formatDateCalendar, getPreviousDay } from '../utils/date';
import CardDate from './CardDate';

LocaleConfig.locales[LOCALE_CONFIG] = { ...CONFIG_MONTHS_DAYS };
LocaleConfig.defaultLocale = LOCALE_CONFIG;

interface IItemDateProps {}

const ItemDate = ({}: IItemDateProps) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedValue, setSelectedValue] = useState<Date>(new Date());
    const [isToday, setIsToday] = useState(true);
    const [isYesterday, setisYesterday] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <CustomText style={styles.label}>Fecha</CustomText>
                <View style={GlobalStyles.rowBetween}>
                    <View style={GlobalStyles.row}>
                        <CardDate
                            selectedDate={selectedValue}
                            label='Hoy'
                            date={new Date()}
                            isSelected={isToday}
                            onSelected={() => {
                                setIsToday(true);
                                setisYesterday(false);
                                setSelectedValue(new Date());
                            }}
                        />
                        <CardDate
                            selectedDate={selectedValue}
                            label='Ayer'
                            date={getPreviousDay()}
                            isSelected={isYesterday}
                            onSelected={() => {
                                setisYesterday(true);
                                setIsToday(false);
                                setSelectedValue(getPreviousDay());
                            }}
                        />
                        {!isToday && !isYesterday && (
                            <CardDate
                                selectedDate={selectedValue}
                                label='Seleccionada'
                                date={selectedValue}
                                isSelected
                                onSelected={() => {
                                    // setIsToday(true);
                                    // setisYesterday(false);
                                    // setSelectedValue(new Date());
                                }}
                            />
                        )}
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setShowCalendar(!showCalendar)}
                        style={styles.containerIcon}>
                        <Icon name='calendar' size={26} color={colors.light.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            {showCalendar && (
                <View style={styles.containerCalendar}>
                    <Calendar
                        style={[
                            styles.calendar,
                            styles.customCalendar,
                            { borderWidth: 1, borderColor: 'gray', height: 350 },
                        ]}
                        firstDay={1}
                        current={formatDateCalendar(selectedValue)}
                        maxDate={formatDateCalendar(new Date())}
                        disableAllTouchEventsForDisabledDays
                        theme={{ ...THEME_CUSTOM_CALENDAR }}
                        markedDates={{
                            [formatDateCalendar(selectedValue)]: {
                                selected: true,
                                disableTouchEvent: true,
                                marked: true,
                                dotColor: colors.light.white,
                                color: colors.light.primary,
                            },
                        }}
                        markingType={'custom'}
                        onDayPress={(day) => {
                            if (day.dateString === formatDateCalendar(getPreviousDay())) {
                                setisYesterday(true);
                                setIsToday(false);
                            } else if (day.dateString === formatDateCalendar(new Date())) {
                                setIsToday(true);
                                setisYesterday(false);
                            } else {
                                setIsToday(false);
                                setisYesterday(false);
                            }
                            const date_ = new Date();
                            date_.setDate(day.day);
                            date_.setMonth(day.month - 1);
                            date_.setFullYear(day.year);
                            setSelectedValue(date_);
                            setShowCalendar(false);
                        }}
                    />
                </View>
            )}
        </>
    );
};

export default ItemDate;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
    },
    containerIcon: {
        alignSelf: 'center',
        marginRight: size.XXL,
    },
    customCalendar: {
        height: 180,
        // width: '94%',
        // alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        // zIndex: 99999,
        // position: 'absolute',
        // bottom: 0,
        // top: 0,
    },
    calendar: {
        marginBottom: 10,
    },
    containerCalendar: {
        top: 100,
        left: 0,
        right: 0,
        position: 'absolute',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: size.L,
        marginHorizontal: size.S,
    },
});
