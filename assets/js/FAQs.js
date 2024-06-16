class FAQs{
  static add_detailsDefault(detailsData,id_addDetails){
    let addDetailsEl=document.querySelector(id_addDetails);
    addDetailsEl.innerHTML='';
    let str="";
    
    for(let i=0;i<detailsData.length;i++){
      str+=`<details class="details">
        <summary>${detailsData[i]['summary']}</summary>
        <div class="details_in">
          <p>
            ${detailsData[i]['answerEN']}
          </p>
        </div>
      </details>`
    }
    addDetailsEl.innerHTML=str;

  }
  
  static add_detailsUpdate(detailsData,id_addDetails){
    let addDetailsEl=document.querySelector(id_addDetails);
    console.log(detailsData,id_addDetails);
  }

  static add_detailsMyType(detailsData,id_addDetails){
    let addDetailsEl=document.querySelector(id_addDetails);
    console.log(detailsData,id_addDetails);
  }
}

// Examples / пример 
let detailsData=[
  {
    summary: "When delivery my order?",
    answerEN: "Hevo Data is a No-code Data Pipeline that offers a fully managed no-code platform to set up data integration from MySQL and 150+ Data Sources (including 50+ Free Data Sources)and will let you directly load data to a Data Warehouse or the destination of your choice. Its fault-tolerant architecture makes sure that your data is secure and consistent.",
    answerRU: "Hevo Data — это конвейер данных без кода, который предлагает полностью управляемую платформу без кода для настройки интеграции данных из MySQL и более 150 источников данных (включая более 50 бесплатных источников данных) и позволяет напрямую загружать данные в хранилище данных или пункт назначения по вашему выбору. Его отказоустойчивая архитектура гарантирует безопасность и согласованность ваших данных."
  },
  {
    summary: "When delivery my order?",
    answerEN: "Hevo Data is a No-code Data Pipeline that offers a fully managed no-code platform to set up data integration from MySQL and 150+ Data Sources (including 50+ Free Data Sources)and will let you directly load data to a Data Warehouse or the destination of your choice. Its fault-tolerant architecture makes sure that your data is secure and consistent.",
    answerRU: "Hevo Data — это конвейер данных без кода, который предлагает полностью управляемую платформу без кода для настройки интеграции данных из MySQL и более 150 источников данных (включая более 50 бесплатных источников данных) и позволяет напрямую загружать данные в хранилище данных или пункт назначения по вашему выбору. Его отказоустойчивая архитектура гарантирует безопасность и согласованность ваших данных."
  },
  {
    summary: "When delivery my order?",
    answerEN: "Hevo Data is a No-code Data Pipeline that offers a fully managed no-code platform to set up data integration from MySQL and 150+ Data Sources (including 50+ Free Data Sources)and will let you directly load data to a Data Warehouse or the destination of your choice. Its fault-tolerant architecture makes sure that your data is secure and consistent.",
    answerRU: "Hevo Data — это конвейер данных без кода, который предлагает полностью управляемую платформу без кода для настройки интеграции данных из MySQL и более 150 источников данных (включая более 50 бесплатных источников данных) и позволяет напрямую загружать данные в хранилище данных или пункт назначения по вашему выбору. Его отказоустойчивая архитектура гарантирует безопасность и согласованность ваших данных."
  },
  {
    summary: "When delivery my order?",
    answerEN: "Hevo Data is a No-code Data Pipeline that offers a fully managed no-code platform to set up data integration from MySQL and 150+ Data Sources (including 50+ Free Data Sources)and will let you directly load data to a Data Warehouse or the destination of your choice. Its fault-tolerant architecture makes sure that your data is secure and consistent.",
    answerRU: "Hevo Data — это конвейер данных без кода, который предлагает полностью управляемую платформу без кода для настройки интеграции данных из MySQL и более 150 источников данных (включая более 50 бесплатных источников данных) и позволяет напрямую загружать данные в хранилище данных или пункт назначения по вашему выбору. Его отказоустойчивая архитектура гарантирует безопасность и согласованность ваших данных."
  },
  {
    summary: "When delivery my order?",
    answerEN: "Hevo Data is a No-code Data Pipeline that offers a fully managed no-code platform to set up data integration from MySQL and 150+ Data Sources (including 50+ Free Data Sources)and will let you directly load data to a Data Warehouse or the destination of your choice. Its fault-tolerant architecture makes sure that your data is secure and consistent.",
    answerRU: "Hevo Data — это конвейер данных без кода, который предлагает полностью управляемую платформу без кода для настройки интеграции данных из MySQL и более 150 источников данных (включая более 50 бесплатных источников данных) и позволяет напрямую загружать данные в хранилище данных или пункт назначения по вашему выбору. Его отказоустойчивая архитектура гарантирует безопасность и согласованность ваших данных."
  },
  {
    summary: "When delivery my order?",
    answerEN: "Hevo Data is a No-code Data Pipeline that offers a fully managed no-code platform to set up data integration from MySQL and 150+ Data Sources (including 50+ Free Data Sources)and will let you directly load data to a Data Warehouse or the destination of your choice. Its fault-tolerant architecture makes sure that your data is secure and consistent.",
    answerRU: "Hevo Data — это конвейер данных без кода, который предлагает полностью управляемую платформу без кода для настройки интеграции данных из MySQL и более 150 источников данных (включая более 50 бесплатных источников данных) и позволяет напрямую загружать данные в хранилище данных или пункт назначения по вашему выбору. Его отказоустойчивая архитектура гарантирует безопасность и согласованность ваших данных."
  }
]
FAQs.add_detailsDefault(detailsData,'#add_details');
