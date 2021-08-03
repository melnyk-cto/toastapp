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
import avatar1 from "../../../../assets/images/events/avatar1.png";
import avatar2 from "../../../../assets/images/events/avatar2.png";
import avatar3 from "../../../../assets/images/events/avatar3.png";


const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const events = [
  {avatar: avatar1, month: 'September', day: 2},
  {avatar: avatar2, month: 'September', day: 7},
  {avatar: avatar3, month: 'September', day: 10}
]
export const EventCalendar = () => {

  let refCalendar = useRef(null);
  useEffect(() => {

    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;

    const config = {
      show: 3,
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
            calendarHtml += '<td>' + dayCount + '</td>';
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