<template>
  <div class="hrlist-wrapper">
    <table class="hr-table">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee No.</th>
          <th>Dates</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <table-tag v-for="t in requests" :key="t.id" :t="t"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableTag from './TableTag.vue'
export default{
  components:{
    TableTag
  },
  data(){
    return{
      requests: [
        {  id : 1 ,
          employeeName : "Sibongile Nkosi",
          employeeNum : "123456" ,
          dates : [{
            dates:"22-07-2025",
            reason:"Sick Leave",
            status:"Pending",
          },
          {
            dates:"01-12-2024",
            reason:"Personal",
            status:"Pending",
          }]
        },
        {  id : 2  ,
          employeeName : "Lungile Moyo" ,
          employeeNum : "654321",
          dates: [{
            status : "Pending",
            dates : "15-07-2025",
            reason : "Family Responsibilty",
          },{
            dates : "02-12-2024",
            reason : "Vacation",
            status : "Pending",
          }
          ]
        },
        {  id : 3  ,
          employeeName : "Thabo Molefe",
          employeeNum : "147896",
          dates: [{
            status : "Pending",
            dates : "10-07-2025",
            reason : "Medical Appointment",
          },{
            dates : "05-12-2024",
            reason : "Personal",
            status : "Pending",
          }
          ]
        },
        {   id : 4 ,
          employeeName : "Keshav Naidoo",
          employeeNum : "369871",
          status : "Pending",
          dates : "20-07-2025",
          reason : "Bereavement",
        },
        {   id : 5 ,
          employeeName : "Zanele Khumalo",
          employeeNum : "789456",
          status : "Pending",
          dates : "01-12-2024",
          reason: "ChildCare",
        },
        {   id : 6 ,
          employeeName : "Sipho Zulu",
          employeeNum : "654987",
          status : "Pending",
          dates : "18-07-2025",
          reason: "Sick Leave",
        },
        {   id : 7 ,
          employeeName : "Naledi Moeketsi",
          employeeNum : "258963",
          status : "Pending",
          dates : "22-07-2025",
          reason : "Vacation",
        },
        {   id : 8  ,
          employeeName : "Farai Gumbo",
          employeeNum : "147852",
          status : "Pending",
          dates: "02-12-2024",
          reason: "Medical Appointment",
        },
        {   id : 9 ,
          employeeName : "Karabo Dlamini",
          employeeNum : "159632",
          status : "Pending",
          dates: "19-07-2025",
          reason: "Childcare",
        },
        {   id : 10 ,
          employeeName : "Fatima Patel",
          employeeNum : "357412",
          status : "Pending",
          dates: "03-12-2024",
          reason: "Vacation",
        },
      ]
    };
  },
  methods: {
  }
}
</script>

<style scoped>
.hrlist-wrapper {
  width: 100%;
  height: calc(100vh - 110px); /* Adjust 110px if your header is taller/shorter */
  overflow-y: auto;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.border{
    border-bottom: 1px solid #000000;
}
.hr-table {
  width: 98%;
  height: 50rem;
  margin: 0 auto 24px auto;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(21,101,192,0.08);
}
.hr-table thead {
  background-color: #1565c0;
}
.hr-table th {
  color: #fff;
  font-weight: bold;
  padding: 12px 8px;
  text-align: center;
  font-size: 1rem;
}
.hr-table td {
  background: #ffffff;
  color: #222;
  padding: 10px 8px;
  text-align: center;
  font-size: 1rem;
}
.hr-table tr {
  border-bottom: 1px solid #ffffff;
}
.hr-table tr:last-child {
  border-bottom: none;
}



</style>