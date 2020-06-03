<template>
  <div class="container mt-4 text-left">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- Email Address -->
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Publicly visible email to contact with questions regarding event "
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <!-- Row for first and last name -->
      <div class="row">
        <b-form-group class="col-sm-6" id="input-group-2" label="First:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.firstname" required placeholder="First Name"></b-form-input>
        </b-form-group>

        <b-form-group class="col-sm-6" id="input-group-2" label="Last:" label-for="input-3">
          <b-form-input id="input-2" v-model="form.lastname" required placeholder="Last Name"></b-form-input>
        </b-form-group>
      </div>

      <b-form-group
        id="input-title"
        label="Event Name"
        label-for="input-title"
        description="Headline of the event"
      >
        <b-form-input id="input-name" v-model="form.eventName" required placeholder="Event Name"></b-form-input>
      </b-form-group>

      <!-- Event Type -->
      <b-form-group id="input-group-3" label="Event Type:" label-for="input-4">
        <b-form-select id="input-3" v-model="form.eventType" :options="eventTypes" required></b-form-select>
      </b-form-group>

      <!-- Event Date  and time-->
      <div class="row mb-4">
        <div class="col-sm-4">
          <label for="event-date">Event Date</label>
          <b-form-datepicker
            id="event-date"
            v-model="form.eventDate"
            :min="form.min"
            :max="form.max"
            locale="en"
            required
          ></b-form-datepicker>
        </div>

        <div class="col-sm-4">
          <label for="start-timepicker-placeholder">Event Start Time</label>
          <b-form-timepicker
            v-model="form.eventStartTime"
            id="start-timepicker-placeholder"
            placeholder="Choose a start time"
            local="en"
            required
          ></b-form-timepicker>
        </div>

        <div class="col-sm-4">
          <label for="end-timepicker-placeholder">Event End Time</label>
          <b-form-timepicker
            v-model="form.eventEndTime"
            id="end-timepicker-placeholder"
            placeholder="Choose an end time"
            local="en"
            required
          ></b-form-timepicker>
        </div>
      </div>

      <!-- Event Description -->
      <b-form-group description="Publicly visible event description">
        <label for="textarea">Event Description</label>
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Enter event description here..."
          rows="6"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>

      <!-- Event Image -->
      <label for="fileUpload">Event Image</label>
      <b-form-file
        id="fileUpload"
        class="mb-4"
        v-model="form.file"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>

      <!-- Event Tags -->
      <b-form-group>
        <label for="tags-remove-on-delete">Event Tags</label>
        <b-form-tags
          label="Event Tags"
          input-id="tags-remove-on-delete"
          :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
          v-model="form.tags"
          separator=" "
          placeholder="Enter new tags separated by space"
          remove-on-delete
          class="mb-2"
        ></b-form-tags>
      </b-form-group>

      <!-- Check boxes -->
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="public">Open to the public</b-form-checkbox>
          <b-form-checkbox value="tickets">Tickets Required</b-form-checkbox>
          <b-form-checkbox value="all ages">All Ages</b-form-checkbox>
          <b-form-checkbox value="21 and up">21 and Up</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <!-- Submit Buttons -->
      <div class="text-right">
        <b-button class="mr-4" type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>

    <b-button @click="pushEvent">Click me for put request</b-button>
    <!-- Data to be displayed for dev purposes only -->
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
//import axios from "axios";
import WPAPI from "wpapi";

export default {
  name: "Submitform",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th two months prior
    const minDate = new Date(today);
    //minDate.setMonth(minDate.getMonth() + 1)
    //minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(15);

    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        eventName: "",
        eventType: null,
        file: null,
        checked: [],
        description: null,
        tags: [],

        eventDate: null,
        eventStartTime: null,
        eventEndTime: null,

        min: minDate,
        max: maxDate
      },
      eventTypes: [
        { text: "Event Type", value: null },
        "Music",
        "Comedy",
        "Art",
        "Meetup",
        "Other"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.eventType = null;
      this.form.checked = [];
      this.form.text = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    pushEvent: function() {
      var wp = new WPAPI({
        endpoint: "http://domain2a0cda.stackstaging.com/wp-json/",
        // This assumes you are using basic auth, as described further below
        username: "admin",
        password: "8lmF tMkA YkVk iX3j gWnA T8xt"
      });
      wp.posts()
        .create({
          // "title" and "content" are the only required properties
          title: this.form.eventName,
          content: this.form.description,
          

          fields: {
            event_title: this.form.eventName,
            user_email: this.form.email,
            event_date: this.form.eventDate,
            event_description: this.form.description,
            user_first_name: this.form.firstname,
            user_last_name: this.form.lastname,
            event_type: this.form.eventType,
            event_start_time: this.form.eventStartTime,
            event_end_time: this.form.eventEndTime,
            event_image: this.form.file,
            event_tags: this.form.tags,
            event_info: this.form.checked
          },
          // Post will be created as a draft by default if a specific "status"
          // is not specified
          status: "publish"
        })
        .then(function(response) {
          // "response" will hold all properties of your newly-created post,
          // including the unique `id` the post was assigned on creation
          console.log(response.id);
        });

      // axios.post('http://domain2a0cda.stackstaging.com/wp-json/wp/v2/posts', {
      //    auth: {
      //      username: 'admin',
      //      password: 'S1(ra@Q%6NV4QQD!'
      //    },
      //    data: {
      //      title: 'Fred',
      //      content: 'Flintstone'
      //   },
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>