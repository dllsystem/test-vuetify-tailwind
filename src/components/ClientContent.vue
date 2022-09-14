<template>
  <div class="p-0 h-screen w-full p-4 bg-[#fafafa]">
    <v-tabs v-model="tab" background-color="transparent" slider-size="5" >
      <v-tab class="capitalize">History</v-tab>
      <v-tab class="capitalize">Notes</v-tab>
      <v-tab class="capitalize">Email</v-tab>
      <v-tab class="capitalize">Calls</v-tab>
      <v-tab class="capitalize">Tasks</v-tab>
      <v-tab class="capitalize">Meetings</v-tab>
      <v-tab class="capitalize">Watchlist</v-tab>
    </v-tabs>
    <v-divider class="opacity-50" />
    <div class="px-2 pt-8">
      <div class="flex justify-end pb-2">
        <v-btn text fab small >
          <v-icon size="16">fa-ellipsis</v-icon>
        </v-btn>
      </div>
      <v-card flat elevation="2">
        <v-card-text class="flex gap-4 items-center">
          <div class="flex gap-4 items-center">
            <v-btn fab dark width="45" height="45" color="grey lighten-3" elevation="0" class="m-1.5">
              <v-icon color="yellow darken-3" size="15">fa-star</v-icon>
            </v-btn>
            <span class="text-lg font-semibold text-gray-600">
                Create Watchlist Notes
              </span>
          </div>
          <div >
            <v-avatar size="40" class="-ml-2 border-2 shadow border-white">
              <img :src="getAvatar(1)" />
            </v-avatar>
            <v-avatar size="40" class="-ml-2 border-2 shadow border-white">
              <img :src="getAvatar(2)" />
            </v-avatar>
          </div>
          <v-btn text fab small >
            <v-icon size="16">fa-ellipsis</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider class="opacity-50"></v-divider>
        <div class="flex gap-8 px-8 py-4">
          <div class="w-1/2 shadow-md">
            <TinyEditor
                :init="{
                  height: 150,
                  menubar: false,
                  plugins: [],
                  toolbar: 'fontfamily bold italic underline strikethrough indent outdent blockquote',
                  branding: false,
                  statusbar: false,
                  paste_block_drop: false,
                  paste_data_images: true,
                  paste_as_text: true,
                  placeholder: 'Main Reason For Priority'
                }"
            />
          </div>
          <div class="w-1/2">
            <TinyEditor
                :init="{
                  height: 150,
                  menubar: false,
                  plugins: [],
                  toolbar: 'fontfamily bold italic underline strikethrough indent outdent blockquote',
                  branding: false,
                  statusbar: false,
                  paste_block_drop: false,
                  paste_data_images: true,
                  paste_as_text: true,
                  placeholder: 'What are we doing this week to provide value?'
                }"
            />
          </div>
        </div>

        <div class="flex gap-8 px-8 py-4">
          <div class="w-1/2 shadow-md">
            <TinyEditor
                :init="{
                  height: 150,
                  menubar: false,
                  plugins: [],
                  toolbar: 'fontfamily bold italic underline strikethrough indent outdent blockquote',
                  branding: false,
                  statusbar: false,
                  paste_block_drop: false,
                  paste_data_images: true,
                  paste_as_text: true,
                  placeholder: 'How to remove?'
                }"
            />
          </div>
          <div class="w-1/2">
          </div>
        </div>
        <v-card-actions class="mt-4 flex justify-end">
          <v-btn text class="primary" >
            <span class="mr-2">Save Watchlist Notes</span>
            <v-icon color="text-white" size="14">fa-star</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import TinyEditor from '@tinymce/tinymce-vue'
export default {
  components: {
    TinyEditor
  },
  data: () => ({
    tab: 6,
  }),
  methods: {
    getAvatar(id) {
      return `https://randomuser.me/api/portraits/women/${id}.jpg`;
    },
  },
}
</script>