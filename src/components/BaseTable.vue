<template>
    <div>
      <table ref="table" class=" table align-items-center mb-0 display">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" v-for="(column, index) in columns" :key="index">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td>
                <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ row.name }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ row.email }}</p>
                </div>
                </div>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">{{ row.position }}</p>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">{{ row.office }}</p>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">{{ row.age }}</p>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">{{ row.startDate }}</p>
            </td>
            <td>
                <p class="text-xs font-weight-bold mb-0">{{ row.salary }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import $ from 'jquery';
  import 'datatables.net';
  
  export default {
    name: "BaseTable",
    props: {
      columns: {
        type: Array,
        required: true
      },
      tableData: {
        type: Array,
        required: true
      }
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
            ordering: true
          });
        });
      }
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
      }
    }
  };
  </script>
  
  <style>
  @import 'datatables.net-dt/css/dataTables.dataTables.css';
  </style>

  <style>
    div.dt-container .dt-paging .dt-paging-button {
        border: none !important;
        border-radius: 50%!important;
    }

    div.dt-container .dt-paging .dt-paging-button.current, div.dt-container .dt-paging .dt-paging-button.current:hover {
        /* color: inherit !important; */
        color: white !important;
        background: linear-gradient(to bottom, rgb(95 182 100) 0%, rgb(70 162 75) 100%)!important; /* W3C */
    }
  </style>
  