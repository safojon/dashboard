<script setup>
import { ref, computed } from "vue";
import BaseTable from "@/components/UI/table/index.vue";
import { tableHeaders, tableRows } from "@/constants/index";

const search = ref("");

const Search = computed(() => {
  return tableRows.filter((row) =>
    row.Name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const Count = tableRows.length;

const activeCount = tableRows.filter((row) => row.Status === "Active").length;
</script>

<template>
  <main>
    <div class="container">
      <div class="name-search">
        <div class="name">Hello Evano 👋🏼,</div>
        <div class="search">
          <svg
            class="search-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="Search" id="" />
        </div>
      </div>
      <div class="earing">
        <div class="earing-container">
          <div class="earingg">
            <div class="earing-icon">
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="42"
                  fill="url(#paint0_linear_1_558)"
                />
                <path
                  d="M38.0302 41.0229C37.8552 41.0054 37.6452 41.0054 37.4527 41.0229C33.2877 40.8829 29.9802 37.4704 29.9802 33.2704C29.9802 28.9829 33.4452 25.5004 37.7502 25.5004C42.0377 25.5004 45.5202 28.9829 45.5202 33.2704C45.5027 37.4704 42.1952 40.8829 38.0302 41.0229Z"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M50.7172 28.9996C54.1122 28.9996 56.8422 31.7471 56.8422 35.1246C56.8422 38.4321 54.2172 41.1271 50.9447 41.2496C50.8047 41.2321 50.6472 41.2321 50.4897 41.2496"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.2805 47.4796C25.0455 50.3146 25.0455 54.9346 29.2805 57.7521C34.093 60.9721 41.9855 60.9721 46.798 57.7521C51.033 54.9171 51.033 50.2971 46.798 47.4796C42.003 44.2771 34.1105 44.2771 29.2805 47.4796Z"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M54.0947 57.0004C55.3547 56.7379 56.5447 56.2304 57.5247 55.4779C60.2547 53.4304 60.2547 50.0529 57.5247 48.0054C56.5622 47.2704 55.3897 46.7804 54.1472 46.5004"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_558"
                    x1="74.55"
                    y1="2.14197e-06"
                    x2="42"
                    y2="84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3FFE7" />
                    <stop offset="1" stop-color="#EFFFF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="text">
              <div class="total">Total Customers</div>
              <div class="count">{{ Count }}</div>
            </div>
          </div>
          <div class="earingg">
            <div class="earing-icon">
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="42"
                  fill="url(#paint0_linear_1_576)"
                />
                <path
                  d="M46.0666 53.75L48.5999 56.2833L53.6666 51.2167"
                  stroke="#00AC4F"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.2669 40.117C42.1003 40.1003 41.9003 40.1003 41.7169 40.117C37.7503 39.9837 34.6003 36.7337 34.6003 32.7337C34.5836 28.6503 37.9003 25.3337 41.9836 25.3337C46.0669 25.3337 49.3836 28.6503 49.3836 32.7337C49.3836 36.7337 46.2169 39.9837 42.2669 40.117Z"
                  stroke="#00AC4F"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.9832 58.3498C38.9498 58.3498 35.9332 57.5832 33.6332 56.0498C29.5998 53.3498 29.5998 48.9498 33.6332 46.2665C38.2165 43.1998 45.7332 43.1998 50.3165 46.2665"
                  stroke="#00AC4F"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_576"
                    x1="74.55"
                    y1="2.14197e-06"
                    x2="42"
                    y2="84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3FFE7" />
                    <stop offset="1" stop-color="#EFFFF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="text">
              <div class="total">Members</div>
              <div class="count">{{ Count }}</div>
            </div>
          </div>
          <div class="earingg">
            <div class="earing-icon">
              <svg
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="42"
                  fill="url(#paint0_linear_1_593)"
                />
                <path
                  d="M32.27 24.5H51.7125C57.9425 24.5 59.5 26.0575 59.5 32.27V43.3475C59.5 49.5775 57.9425 51.1175 51.73 51.1175H32.27C26.0575 51.135 24.5 49.5775 24.5 43.365V32.27C24.5 26.0575 26.0575 24.5 32.27 24.5Z"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42 51.1345V59.4995"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.5 43.75H59.5"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.125 59.5H49.875"
                  stroke="#00AC4F"
                  stroke-width="2.625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_593"
                    x1="74.55"
                    y1="2.14197e-06"
                    x2="42"
                    y2="84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3FFE7" />
                    <stop offset="1" stop-color="#EFFFF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="text">
              <div class="total">Active Now</div>
              <div class="count">{{ activeCount }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="customs">
        <div class="custom-top">
          <div class="all">All Customers</div>
          <div class="search">
            <svg
              class="search-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#7E7E7E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="#7E7E7E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" v-model="search" placeholder="Search" />
          </div>
        </div>
        <BaseTable :headings="tableHeaders" :data="Search"></BaseTable>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");

.container {
  margin-left: 71px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.name-search {
  margin-top: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: none;
  stroke: #9197b3;
}
.search {
  position: relative;
}

input {
  padding-left: 35px;
  height: 216px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  border-radius: 12px;
}

input::placeholder {
  color: rgba(181, 183, 192, 1);
}

.total {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgba(172, 172, 172, 1);
}

.count {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: rgba(172, 172, 172, 1);
  color: black;
}

.name {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}

.earing-container {
  margin-top: 31px;
  margin-left: 50px;
  margin-right: 88px;
  display: flex;
  gap: 112px;
}

.earing {
  width: 1022px;
  height: 151px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
}

.earingg {
  display: flex;
  gap: 20px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.main-page {
  padding: 20px;
}

.customs {
  width: 968px;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  padding: 30px;
}

.custom-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.all {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
}
</style>
