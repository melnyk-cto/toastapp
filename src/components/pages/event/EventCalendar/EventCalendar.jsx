import React, { useEffect, useRef } from "react";

// library
import { Link } from "react-router-dom";

// components
import { NoNavigationLayout } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from "./EventCalendar.module.scss";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";
import { ReactComponent as MoreSvg } from "../../../../assets/images/icons/more-horizontal.svg";
import avatar1 from "../../../../assets/images/events/calendar/avatar-1.png";
import avatar2 from "../../../../assets/images/events/calendar/avatar-2.png";
import avatar3 from "../../../../assets/images/events/calendar/avatar-3.png";
import avatar4 from "../../../../assets/images/events/calendar/avatar-4.png";
import avatar5 from "../../../../assets/images/events/calendar/avatar-5.png";
import avatar6 from "../../../../assets/images/events/calendar/avatar-6.png";
import avatar7 from "../../../../assets/images/events/calendar/avatar-7.png";
import avatar8 from "../../../../assets/images/events/calendar/avatar-8.png";
import avatar9 from "../../../../assets/images/events/calendar/avatar-9.png";
import avatar10 from "../../../../assets/images/events/calendar/avatar-10.png";
import avatar11 from "../../../../assets/images/events/calendar/avatar-11.png";
import avatar12 from "../../../../assets/images/events/calendar/avatar-12.png";


const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const events = [
  {id: 0, avatar: avatar1, month: 'September', day: 2},
  {id: 1, avatar: avatar2, month: 'September', day: 7},
  {id: 2, avatar: avatar3, month: 'September', day: 10},
  {id: 3, avatar: avatar4, month: 'September', day: 11},
  {id: 4, avatar: avatar5, month: 'September', day: 15},
  {id: 5, avatar: avatar6, month: 'September', day: 17},
  {id: 6, avatar: avatar7, month: 'September', day: 18},
  {id: 7, avatar: avatar8, month: 'September', day: 20},
  {id: 8, avatar: avatar9, month: 'September', day: 21},
  {id: 9, avatar: avatar10, month: 'September', day: 24},
  {id: 10, avatar: avatar11, month: 'September', day: 25},
  {id: 11, avatar: avatar12, month: 'September', day: 27},
]
export const EventCalendar = () => {

  let refCalendar = useRef(null);
  useEffect(() => {

    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    const config = {
      show: 2,
    }

    const showCalendar = (year, month) => {
      for (let i = 0; i < config.show; i++) {

        const calendarHtml = createCalendar(year, month);

        const sec = document.createElement('div');
        sec.innerHTML = calendarHtml;
        refCalendar.current.appendChild(sec);

        month++;
        if (month > 12) {
          year++;
          month = 1;
        }
      }
    }

    const createCalendar = (year, month) => {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0); // => Sat Jul 31 2021
      const endDateCount = endDate.getDate(); // => 31
      const lastMonthEndDate = new Date(year, month - 1, 0); // => Wed Jun 30 2021...
      const lastMonthEndDateCount = lastMonthEndDate.getDate(); // => 30
      const startDay = startDate.getDay(); // => 4
      let dayCount = 1;
      let calendarHtml = '';

      calendarHtml += '<h5>' + monthNames[month] + ' ' + year + '<h1>';
      calendarHtml += '<table class="calendar">';

      for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td class="title">' + weeks[i] + '</td>';
      }

      let count = 0;
      for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>';

        for (let d = 0; d < 7; d++) {
          if (w === 0 && d < startDay) {
            let num = lastMonthEndDateCount - startDay + d + 1;
            calendarHtml += `<td class='is-disabled'>${num}</td>`;
          } else if (dayCount > endDateCount) {
            let num = dayCount - endDateCount;
            calendarHtml += `<td class='is-disabled'>${num}</td>`
            dayCount++;
          } else {
            if (events.filter(event => event.day === dayCount).length !== 0) {
              count = count + 1;
              calendarHtml += `<td class='event'><img src='${events[count - 1].avatar}' alt=''><span>${dayCount}</span></td>`;
            } else {
              calendarHtml += '<td>' + dayCount + '</td>';
            }
            dayCount++;
          }
        }
        calendarHtml += '</tr>'
      }
      calendarHtml += '</table>';

      return calendarHtml;
    }

    showCalendar(year, month);
  }, [])
  return (
    <NoNavigationLayout>
      <main className={styles.event}>
        <div className={styles.panel}>
          <Link to={routes.event} className={styles.icon}>
            <BackSvg />
          </Link>
          <div className={styles.header}>
            <h4>Events Calendar</h4>
            <p>Hyderabad</p>
          </div>
          <Link to={routes.eventCalendar} className={`${styles.icon} ${styles.more}`}>
            <MoreSvg />
          </Link>
        </div>

        <section className={styles.content}>
          <div ref={refCalendar} />
        </section>
      </main>
    </NoNavigationLayout>
  )
}