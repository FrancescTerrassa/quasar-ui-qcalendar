(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[231],{d367:function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n    <q-toolbar class="no-padding no-margin" style="height: 40px; min-height: auto;">\n      <q-space />\n      <q-btn flat label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn flat label="Next" @click="calendarNext" />\n      <q-space />\n    </q-toolbar>\n    <q-separator class="full-width" />\n    <div class="row justify-center" style="max-width: 800px; width: 100%; overflow: hidden;">\n      <q-calendar\n        ref="calendar"\n        v-model="selectedDate"\n        view="month"\n        locale="en-us"\n        mini-mode\n        @click:date2="handleClick"\n        @mousemove:day2="handleHoverStart"\n        @mouseleave:day2="handleHoverEnd"\n        :day-class="classDay"\n        style="max-width: 300px; min-width: auto; overflow: hidden"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { date } from \'quasar\'\n\nexport default {\n  data () {\n    return {\n      dates: [],\n      hover: null,\n      selectedDate: \'\'\n    }\n  },\n\n  computed: {\n    classDay () {\n      return ({ date: d }) => {\n        if (this.hover && this.dates.length === 1) {\n          return {\n            \'q-selected-day-first\': this.isHoveringFirst(d),\n            \'q-selected-day\': this.isHovering(d),\n            \'q-selected-day-last\': this.isHoveringLast(d)\n          }\n        }\n        else if (this.dates.length === 2) {\n          return {\n            \'q-selected-day-first\': this.isSelectedFirst(d),\n            \'q-selected-day\': this.isBetween(d),\n            \'q-selected-day-last\': this.isSelectedLast(d)\n          }\n        }\n      }\n    },\n\n    getMin () {\n      if (this.dates.length === 2) {\n        const [d1, d2] = this.dates\n        return d1 > d2 ? d2 : d1\n      } return null\n    },\n    getMax () {\n      if (this.dates.length === 2) {\n        const [d1, d2] = this.dates\n        return d1 > d2 ? d1 : d2\n      } return null\n    },\n\n    isSelected () {\n      return d => this.dates.includes(d)\n    },\n    isSelectedFirst () {\n      return d => this.getMin === d\n    },\n    isSelectedLast () {\n      return d => this.getMax === d\n    },\n    isBetween () {\n      return d => date.isBetweenDates(d, this.getMin, this.getMax, { inclusiveFrom: true, inclusiveTo: true })\n    },\n\n    isHovering () {\n      return d => this.dates[0] > this.hover\n        ? date.isBetweenDates(d, this.hover, this.dates[0], { inclusiveFrom: true, inclusiveTo: true })\n        : date.isBetweenDates(d, this.dates[0], this.hover, { inclusiveFrom: true, inclusiveTo: true })\n    },\n    isHoveringFirst () {\n      return d => this.dates[0] > this.hover\n        ? this.hover === d\n        : d === this.dates[0]\n    },\n    isHoveringLast () {\n      return d => this.dates[0] < this.hover\n        ? this.hover === d\n        : d === this.dates[0]\n    }\n  },\n\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n\n    removeDate (d) {\n      this.dates = this.dates.filter(v => v !== d)\n    },\n\n    handleClick ({ scope: { timestamp: { date } } }) {\n      if (this.isSelected(date)) this.removeDate(date)\n      else if (this.dates.length < 2) {\n        this.dates.push(date)\n      }\n      else this.dates = [date]\n    },\n\n    handleHoverStart ({ scope: { timestamp: { date } } }) {\n      this.hover = date\n    },\n\n    handleHoverEnd ({ scope: { timestamp: { date } } }) {\n      this.hover = null\n    }\n  }\n}\n<\/script>\n'}}]);