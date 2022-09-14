<template>
  <v-card class="px-0 top-0 py-2.5 w-96 h-screen">
    <div class="flex flex-wrap justify-between my-4 px-4">
      <div >
        <button class="primary rounded-md p-1 px-3 text-white">
          <i class="fas fa-angle-left mr-1.5" />
          <span class="text-sm font-medium">Active Clients</span>
        </button>
      </div>
      <div >
        <button class="rounded-l-md p-1 mr-px p-1 px-4 text-white primary">
          <span class="text-sm font-medium">Actions</span>
        </button>
        <button class="rounded-r-md p-1 px-4 text-white bg-indigo-900 text-white">
          <span class="text-sm font-medium">Activity</span>
        </button>
      </div>
    </div>
    <div class="pt-2 px-4 ">
      <div class="d-flex justify-center">
        <span class="font-weight-black text-h5 yellow--text text--darken-3">Acura Of Lafayette</span>
      </div>
      <div class="d-flex justify-center my-4">
        <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
          <v-icon color="blue darken-2" size="17">fa-edit</v-icon>
        </v-btn>
        <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
          <v-icon color="blue darken-2" size="16">fa-envelope</v-icon>
        </v-btn>
        <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
          <v-icon color="blue darken-2" size="16">fa-phone-alt</v-icon>
        </v-btn>
        <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
          <v-icon color="blue darken-2" size="16">fa-list-check</v-icon>
        </v-btn>
        <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
          <v-icon color="blue darken-2" size="16">fa-calendar-days</v-icon>
        </v-btn>
        <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
          <v-icon color="yellow darken-3" size="15">fa-star</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="px-4 opacity-50">
      <v-divider />
    </div>
    <v-list expand>
      <v-list-group
          append-icon=""
          :value="true"
      >
        <template v-slot:activator>
          <div class="flex justify-between">
            <div class="d-flex">
              <v-icon color="#1975d2" small width="10">
                fa-angle-down
              </v-icon>
              <div class="ml-3">
                <h5 class="text--black font-weight-bold">Contact Details</h5>
              </div>
            </div>
            <div class="pr-1">
              <v-icon color="#1975d2" size="14">
                fa-pencil
              </v-icon>
            </div>
          </div>
        </template>
        <v-list-item >
          <v-list-item-content class="block pt-0 pb-4">
            <template>
              <div class="flex flex-start">
                <div class="w-6/12">
                  <small class="text-gray-400">Company name</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    Acura Of Lafayette
                  </div>
                </div>
                <div class="w-6/12 ml-1">
                  <small class="text-gray-400">Industry</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    Automotive
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-6/12">
                  <small class="text-gray-400">Street</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    6207 Johnston St.
                  </div>
                </div>
                <div class="w-6/12 ml-1">
                  <small class="text-gray-400">City</small>
                  <br />
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    Lafayette
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-6/12">
                  <small class="text-gray-400">Zip Code</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    70503
                  </div>
                </div>
                <div class="w-6/12 ml-1">
                  <small class="text-gray-400">State</small>
                  <br />
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    LA
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-6/12">
                  <small class="text-gray-400">Group</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    Fabre Automotive Group
                  </div>
                </div>
                <div class="w-6/12 ml-1">
                  <small class="text-gray-400">Bill To</small>
                  <br />
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    Fabre Automotive Group
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-6/12">
                  <small class="text-gray-400">Activation Closed Date</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    2021-02-01
                  </div>
                </div>
                <div class="w-6/12 ml-1">
                  <small class="text-gray-400">Proposed Closed Date</small>
                  <br />
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    2021-02-01
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-full">
                  <small class="text-gray-400">Time Zone</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    America/chicago
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-full">
                  <small class="text-gray-400">Website Url</small>
                  <div class="text-sm mt-1 font-semibold text-gray-700">
                    https://www.acuraoflafayette.com/
                  </div>
                </div>
              </div>
              <div class="flex flex-start mt-3">
                <div class="w-full">
                  <small class="text-gray-400">Primary Goals</small>
                  <p class="text-sm my-0 mt-1 font-semibold text-gray-700 truncate">
                    7/12/21-Putting more focused on Used as a don't more focused on
                  </p>
                  <p class="text-sm my-0 font-semibold text-gray-700 truncate">
                    7/12/21-Putting more focused on Used as a don't more focused on
                  </p>
                  <p class="text-sm my-0 font-semibold text-gray-700 truncate">
                    7/12/21-Putting more focused on Used as a don't more focused on
                  </p>
                </div>
              </div>
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <div class="px-4 opacity-50">
        <v-divider />
      </div>
      <v-list-group
          append-icon=""
          :value="true"
      >
        <template v-slot:activator>
          <div class="flex justify-between">
            <div class="d-flex">
              <v-icon color="#1975d2" small width="10">
                fa-angle-down
              </v-icon>
              <div class="ml-3">
                <h5 class="text--black font-weight-bold">Agreement</h5>
              </div>
            </div>
          </div>
        </template>
        <v-list-item>
          <v-list-item-content class="block pt-0 pb-4">
            <template>
              <div class="flex flex-row gap-2 flex-wrap">
                <button class="primary rounded-md p-2 px-3 text-white ">
                  <span class="text-sm font-semibold">Active Clients</span>
                </button>
                <button class="primary rounded-md p-2 px-3 text-white ">
                  <span class="text-sm font-semibold">Insights</span>
                </button>
                <button class="primary rounded-md p-2 px-3 text-white ">
                  <span class="text-sm font-semibold">YOY Performance</span>
                </button>
                <button class="primary rounded-md p-2 px-3 text-white ">
                  <span class="text-sm font-semibold">Website</span>
                </button>
                <button class="primary rounded-md p-2 px-3 text-white ">
                  <span class="text-sm font-semibold">Agreement</span>
                </button>
                <button class="primary rounded-md p-2 px-3 text-white ">
                  <span class="text-sm font-semibold">Add Assignment</span>
                </button>
              </div>
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <div class="px-4 opacity-50">
        <v-divider />
      </div>
      <v-list-group
          append-icon=""
          :value="true"
      >
        <template v-slot:activator>
          <div class="flex justify-between">
            <div class="d-flex">
              <v-icon color="#1975d2" small width="10">
                fa-angle-down
              </v-icon>
              <div class="ml-3">
                <h5 class="text--black font-weight-bold">Team</h5>
              </div>
            </div>
          </div>
        </template>
        <v-list-item>
          <v-list-item-content class="block pt-0 pb-4">
            <template>
              <div class="flex flex-row flex-nowrap">
                <v-tooltip
                    top
                    v-for="item in teamMembers"
                    v-bind:key="item.id"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn class="m-1" icon outlined x-medium v-on="on">
                      <v-avatar size="40" color="#eaf0f6">
                        <img
                            v-if="item.id"
                            :src="getAvatar(item.id)"
                            alt="Avatar"
                        />
                        <span v-else class="white--text text-h5">
                            {{ item.firstName.charAt(0) + item.lastName.charAt(0) }}
                          </span>
                      </v-avatar>
                    </v-btn>
                  </template>
                  <span> {{ item.firstName }} {{ item.lastName }} </span>
                </v-tooltip>
              </div>
            </template>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    teamMembers: [
      { id: 1, email: "paul@example.com", firstName: "Paul", lastName: "aaaaa" },
      { id: 2, email: "daniel@example.com", firstName: "Daniel", lastName: "aaaaa" },
      { id: 3, email: "michael@example.com", firstName: "Michael", lastName: "aaaaa" },
      { id: 4, email: "rob@example.com", firstName: "Rob", lastName: "aaaaa" },
      { id: null, email: "mary@example.com", firstName: "Mary", lastName: "aaaaa" },
      { id: null, email: "jorge@example.com", firstName: "Jorge", lastName: "cccc" },
    ],
    tab: 6,
  }),
  methods: {
    getAvatar(id) {
      return `https://randomuser.me/api/portraits/women/${id}.jpg`;
    },
  },
}
</script>