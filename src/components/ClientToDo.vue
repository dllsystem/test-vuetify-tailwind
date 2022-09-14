<template>
  <v-card class="p-0 min-w-96 w-96 h-screen">
    <div class="flex justify-between p-4">
      <div class="flex items-center">
        <i class="fa fa-angle-double-right fa-lg mr-2" />
        <h5 class="font-weight-black text-xl text-gray-700 ml-1">To Do´s</h5>
      </div>
    </div>
    <div class="px-4 opacity-50">
      <v-divider />
    </div>
    <v-list-group
        v-for="(todo, index) in todos"
        :key="index"
        :value="true"
        append-icon=""
        prepend-icon="fa-angle-down"
    >
      <template v-slot:activator>
        <v-list-item-title>
          <span class="font-bold" :class="todo.class">{{todo.name}}</span>
        </v-list-item-title>
      </template>
      <v-list-item v-for="(item, index) in todo.items" :key="index">
        <div class="w-full grid grid-cols-8 gap-1 text-sm my-2">
          <div class="col-span-1">
            <div class="bg-gray-100 rounded-full h-10 w-10 flex items-center text-center align-center text-gray-600 text-xs cursor-pointer hover:bg-gray-300">
              <div class="w-full text-sm font-bold align-middle">
                <v-icon small color="primary">
                  {{item.icon}}
                </v-icon>
              </div>
            </div>
          </div>
          <div class="col-span-7 pt-3 pl-2">
            <div class="flex flex-col">
              <div class="flex justify-space-between">
                <div class="flex gap-2">
                  <div class="font-semibold text-blue-500 cursor-pointer">
                    {{item.title1}}
                  </div>
                  <div v-if="item.title2" class="font-semibold text-gray-600 cursor-pointer">
                    {{item.title2}}
                  </div>
                </div>
                <span class="whitespace-nowrap text-gray-400/60 text-xs uppercase">
                    {{item.date}}
                  </span>
              </div>
              <div class="text-gray-700 text-xs pt-0.5">
                {{item.subtitle}}
              </div>
              <div class="w-full">
                <div class="truncate text-sm pt-0.5 text-gray-400" >
                  {{item.message}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-list-item>
      <div class="px-4 pt-8 opacity-50">
        <v-divider />
      </div>
    </v-list-group>
  </v-card>
</template>
<script>

export default {
  data: () => ({
    todos: [
      {
        name: 'Past Dues',
        class: '!text-red-500',
        items: [
          {
            icon: 'fa-envelope',
            title1: 'Subj:',
            title2: 'Discuss 2022 Budget',
            subtitle: 'Heather Cavanaugh Cabrielle Cerise',
            message: 'Competitor Analysis sent - Traffic is down 17% Competitor Analysis',
            date: 'DEC 12'
          },
          {
            icon: 'fa-phone-alt',
            title1: 'Missed Call To:',
            title2: 'Jake Smith',
            subtitle: 'Heather Cavanaugh',
            message: 'Call Was scheduled for Wednesday 3pm Competitor Analysis',
            date: 'DEC 15'
          },
          {
            icon: 'fa-calendar-days',
            title1: 'Facebook Campaign Setup',
            title2: null,
            subtitle: 'Heather Cavanaugh Leon Hughes',
            message: 'Microsoft Teams Meting Join On Your Competitor Analysis',
            date: 'DEC 16'
          }
        ]
      },
      {
        name: 'Upcoming',
        class: '!text-green-500',
        items: [
          {
            icon: 'fa-envelope',
            title1: 'Subj:',
            title2: 'Discuss 2022 Budget',
            subtitle: 'Heather Cavanaugh Cabrielle Cerise',
            message: 'Competitor Analysis sent - Traffic is down 17% Competitor Analysis',
            date: 'DEC 12'
          },
          {
            icon: 'fa-phone-alt',
            title1: 'Missed Call To:',
            title2: 'Jake Smith',
            subtitle: 'Heather Cavanaugh',
            message: 'Call Was scheduled for Wednesday 3pm Competitor Analysis',
            date: 'DEC 15'
          },
          {
            icon: 'fa-calendar-days',
            title1: 'Facebook Campaign Setup',
            title2: null,
            subtitle: 'Heather Cavanaugh Leon Hughes',
            message: 'Microsoft Teams Meting Join On Your Competitor Analysis',
            date: 'DEC 16'
          }
        ]
      },
    ],
  }),
}
</script>