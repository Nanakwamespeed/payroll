<template>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-capitalize ps-3">Employee List</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
                <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                        <BaseDataTable :columns="tableColumns" :tableData="tableRows" />
                    </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<!-- Disable the eslint rule for this file -->
<!-- eslint-disable vue/multi-word-component-names -->

  <script>
  import BaseDataTable from '@/components/BaseTable.vue';

export default {
  name: "Employees",
  components: {
    BaseDataTable
  },
  data() {
    return {
      tableColumns: ["name", "Position", "Office", "Age", "Start Date", "Salary"],
      tableRows: [
        {
          name: "Tiger Nixon",
          email: "tiger@gmail.com",
          position: "System Architect",
          office: "Edinburgh",
          age: 61,
          startDate: "2011/04/25",
          salary: "$320,800"
        },
        {
          name: "Garrett Winters",
          email: "tiger@gmail.com",
          position: "Accountant",
          office: "Tokyo",
          age: 63,
          startDate: "2011/07/25",
          salary: "$170,750"
        }
        // More rows
      ]
    };
  }
};
  </script>
  