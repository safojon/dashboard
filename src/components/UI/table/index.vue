<script setup>
import { defineProps } from "vue";

defineProps({
  headings: Array,
  data: Array,
});
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th v-for="head in headings" :key="head.key">
            {{ head.title }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in data" :key="row.id" class="body-tr">
          <td v-for="head in headings" :key="head.key" class="body-td">
            <div
              :class="
                row[head.key] == 'Active'
                  ? 'active'
                  : row[head.key] == 'Inactive'
                  ? 'inactive'
                  : ''
              "
            >
              {{ row[head.key] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border: none;
  margin: 16px 0;
}

th,
td {
  padding: 8px 12px;
  text-align: left;
  border: none;
  font-family: "Poppins", sans-serif;
  color: #292d32;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
}

th {
  font-family: "Poppins", sans-serif;
  color: #b5b7c0;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
}

.body-tr {
  border-bottom: 1px solid #000000;
}

.active {
  width: 80px;
  height: 29px;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  border: 1px solid #00b087;
  background-color: #16c09861;
  color: #008767;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inactive {
  width: 80px;
  height: 29px;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  border: 1px solid #df0404;
  background-color: #ffc5c5;
  color: #df0404;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
