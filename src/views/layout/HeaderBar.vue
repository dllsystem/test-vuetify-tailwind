<template>
  <v-app-bar app color="white" class="drop-shadow" height="80" flat >
    <v-toolbar-title class="hidden-xs-only">
      <v-img
        :src="require('../../assets/logo.png')"
        class="d-inline-block"
        max-width="250"
        height="50"
        contain
        position="left top"
      ></v-img>
    </v-toolbar-title>

    <template>
      <v-spacer />
      <v-autocomplete
        clearable
        filled
        rounded
        hide-details
        placeholder="Search"
        item-text="name"
        return-object
      >
      </v-autocomplete>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div class="d-inline">
            <v-btn class="mr-1" v-bind="attrs" v-on="on" icon color="primary">
              <v-icon small>fa fa-plus-circle</v-icon>
            </v-btn>
          </div>
        </template>
        <v-list>
          <v-list-item>Test 1</v-list-item>
          <v-list-item>Test 2</v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="mr-1" icon>
        <v-icon small>fa fa-info-circle</v-icon>
      </v-btn>
      <v-btn class="mr-1 ml-10" icon color="warning">
        <v-badge color="error" content="1">
          <v-icon small>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>
</template>
