<style lang="scss">
    @import '@fullcalendar/core/main.css';
    @import '@fullcalendar/daygrid/main.css';
    @import '@fullcalendar/timegrid/main.css';
    .fc-button{
        border: 1px solid rgba(0,0,0,.5);
        
    }
    .fc-prev-button,.fc-state-default {
        color: #fff;
        background-color: #2C3E50;
        border-color: #2C3E50;
    }
</style>

<template>
<!--班级-->
    <div  class="content_box1">
        <full-calendar
        :config="config"
        :events="events"
        ></full-calendar>
    </div>
</template>
<script>
    import { FullCalendar } from 'vue-full-calendar'
export default {
    name:'timetable',
    props:[],
    data(){
        return {
            events: [{
                title: '事件内容',  // 事件内容
                start: '2019-05-20 09:00:00', // 事件开始时间
                end: '2019-05-21 12:00:00',   // 事件结束时间
                color: 'rgba(9, 9, 9, 0.2)'       // 事件的显示颜色
                }],
            config: {
                buttonText: { today: "今天", month: "月", week: "周", day: "日" },
                locale: "zh-cn",
                editable: false, //是否允许修改事件
                selectable: false,
                eventLimit: 4, //事件个数
                allDaySlot: false, //是否显示allDay
                defaultView: "month", //显示默认视图
                eventClick: this.eventClick, //点击事件
                dayClick: this.dayClick, //点击日程表上面某一天
            }
        }
    },
    mounted() {
        
    },
    watch: {
        
    },
    created() {
        
    },
    methods: {
        // 点击事件
     eventClick (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
     },
     // 点击当天
     dayClick (day, jsEvent) {
        console.log('dayClick', day, jsEvent)
     }
    },
    components:{
        FullCalendar
    }
}
</script>
