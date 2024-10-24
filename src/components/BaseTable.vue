<template>
    <div>
      <table ref="table" class="table align-items-center mb-0 display">
        <thead>
          <tr>
            <!-- Dynamically render table headers -->
            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              v-for="(column, index) in columns"
              :key="index"
            >
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Dynamically render table rows -->
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td v-for="(column, colIndex) in columns" :key="colIndex">
              <!-- Dynamically render row data based on column name -->
              <!-- <div v-if="column === 'Name'" class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ row.name }}</h6>
                  <p class="text-xs text-secondary mb-0">{{ row.email }}</p>
                </div>
              </div> -->
              <div>
                <p class="text-xs font-weight-bold mb-0">{{ row[column.toLowerCase()] }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import $ from "jquery";
  import "datatables.net";
  
  export default {
    name: "BaseTable",
    props: {
      columns: {
        type: Array,
        required: true,
      },
      tableData: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      this.initializeDataTable();
    },
    methods: {
      initializeDataTable() {
        this.$nextTick(() => {
          $(this.$refs.table).DataTable({
            paging: true,
            searching: true,
            ordering: true,
          });
        });
      },
    },
    beforeUnmount() {
      const table = $(this.$refs.table).DataTable();
      table.destroy();
    },
    watch: {
      tableData() {
        const table = $(this.$refs.table).DataTable();
        table.clear();
        table.rows.add(this.tableData);
        table.draw();
      },
    },
  };
  </script>
  
  <style>
  @import "datatables.net-dt/css/dataTables.dataTables.css";
  
  div.dt-container .dt-paging .dt-paging-button {
    border: none !important;
    border-radius: 50% !important;
  }
  
  div.dt-container .dt-paging .dt-paging-button.current,
  div.dt-container .dt-paging .dt-paging-button.current:hover {
    color: white !important;
    background: linear-gradient(to bottom, rgb(95, 182, 100) 0%, rgb(70, 162, 75) 100%) !important;
  }
  </style>
  