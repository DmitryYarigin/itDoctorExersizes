// let container = document.querySelector('.container');
    function createCalendar(elem, year, month) {
      elem = document.querySelector(elem)
      console.log(elem);
      let mon = month - 1;
      let d = new Date(year, mon);

      let table = `
      <table>
        <caption>${month}.${year}</caption>
        <tr>
          <th>пн</th>
          <th>вт</th>
          <th>ср</th>
          <th>чт</th>
          <th>пн</th>
          <th>сб</th>
          <th>вс</th>
        </tr>
        <tr>
      `; 

      for(let i=0; i<getDay(d); i++) {
        table += '<td></td>';
      };

      while(d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';
        if(getDay(d) % 7 == 6) {
          table +='</tr><tr>'
        }
        d.setDate(d.getDate()+1);
      };

      if(getDay(d) != 0) {
        for(let i=getDay(d); i<7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';
      elem.innerHTML += table;
    }

    function getDay(date) {
      let day = date.getDay();
      if(day == 0) day = 7;
      return day - 1;
    }

    for(let i=1; i< 13; i++) {
      createCalendar('.container', 2022, i);
      // идем потихоньку в верном направлении, дивы создад теперь надо в них поместить месяца как-то
      // createCalendar('body', 2022, 4);
    }

    // ниже код от chatGpt

    // function createCalendar(elem, year, month) {
    //   elem = document.querySelector(elem);
    //   let mon = month - 1;
    //   let d = new Date(year, mon);
    
    //   let table = `
    //     <table>
    //       <caption>${month}.${year}</caption>
    //       <tr>
    //         <th>пн</th>
    //         <th>вт</th>
    //         <th>ср</th>
    //         <th>чт</th>
    //         <th>пт</th>
    //         <th>сб</th>
    //         <th>вс</th>
    //       </tr>
    //       <tr>
    //   `;
    
    //   for (let i = 0; i < getDay(d); i++) {
    //     table += '<td></td>';
    //   }
    
    //   while (d.getMonth() == mon) {
    //     table += '<td>' + d.getDate() + '</td>'; // td ячейка таблицы
    //     if (getDay(d) % 7 == 6) {
    //       table += '</tr><tr>'; // tr это строка таблицы  
    //     }
    //     d.setDate(d.getDate() + 1);
    //   }
    
    //   if (getDay(d) !== 0) {
    //     for (let i = getDay(d); i < 7; i++) {
    //       table += '<td></td>';
    //     }
    //   }
    
    //   table += '</tr></table>';
    //   elem.innerHTML += table;
    // }
    
    // function getDay(date) {
    //   let day = date.getDay();
    //   if (day === 0) day = 7;
    //   return day - 1;
    // }
    
    // function createCalendars(elem) {
    //   const year = new Date().getFullYear(); // Получаем текущий год
    
    //   for (let i = 1; i <= 12; i++) {
    //     createCalendar(".container", 2022, i);
    //   }
    // }
    
    // // вызов функции для элемента с классом container
    // createCalendars(".container");