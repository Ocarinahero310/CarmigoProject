<template>
    <div id="app">
         <!-- <form
         @submit="postData"
         method="post"
         class="pa-15">
          <v-text-field
          type="text"
          v-model="testt"
           @click="test()"
            label="name"
            KeyboardEvent
          ></v-text-field>
          <v-text-field
            label="email"
          ></v-text-field>
          <v-text-field
            label="phoneNumber"
          ></v-text-field>
          <v-text-field
            label="Test"
          ></v-text-field>
  </form> -->
    <v-form method="post" action="http://localhost:3000/" id="nativeForm" v-model="valid">

      <v-text-field
        label="Year"
        v-model="year"
        required
        name="year"
      ></v-text-field>
      <v-text-field
        label="make"
        v-model="make"
        required
        name="make"
      ></v-text-field>
       <v-text-field
        label="model"
        v-model="model"
        required
        name="model"
      ></v-text-field>
       <v-text-field
        label="color"
        v-model="color"
        required
        name="color"
      ></v-text-field>
      <v-btn @click="submit">submit</v-btn>
 </v-form>
    </div>
</template>



<script>
export default {
    name: "PostComponent",
       data () {
         return { 
             year: '',
             make: '',
             model: '',
             color: '',
             valid: true
            // name: '',
            // nameRules: [
            //   (v) => !!v || 'Name is required',
            //   (v) => v.length <= 10 || 'Name must be less than 10 characters'
            // ],
            // email: '',
            // emailRules: [
            //   (v) => !!v || 'E-mail is required',
            //   (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            // ]
          }
        },
        methods: {
          submit() {
            nativeForm.submit()
          }
        }
}
</script>
