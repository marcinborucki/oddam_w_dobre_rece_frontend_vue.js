<template>
  <div class="hello">
  <header-app />
  <section class="form--steps">
      <div class="form--steps-instructions">
        <div class="form--steps-container">
          <h3>Ważne!</h3>
          <p data-step="1" class="active">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
          <p data-step="2">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
          <p data-step="3">
           Wybierz jedną, do
            której trafi Twoja przesyłka.
          </p>
          <p data-step="4">Podaj adres oraz termin odbioru rzeczy.</p>
        </div>
      </div>

      <div class="form--steps-container">
        <div class="form--steps-counter">Krok <span>1</span>/4</div>

        <form   @submit="formSubmit" >
          <!-- STEP 1: class .active is switching steps -->
          <div data-step="1" class="active">
            <h3>Zaznacz co chcesz oddać:</h3>

            <div v-for="cat in category" :key="cat.id" class="form-group form-group--checkbox">
              <label>
                <input 
                  type="checkbox"
                  name="categories"
                  value="clothes-to-use"
                />
                <span class="checkbox"></span>
                <span class="description"
                  >{{cat.name}} </span
                >
              </label>
            </div>

            <div class="form-group form-group--buttons">
              <button type="button" class="btn next-step">Dalej</button>
            </div>
          </div>

          <!-- STEP 2 -->
          <div data-step="2">
            <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>

            <div class="form-group form-group--inline">
              <label>
                Liczba 60l worków:
                <input type="number" name="bags" step="1" min="1" v-model="quantity"/>
              </label>
            </div>

            <div class="form-group form-group--buttons">
              <button type="button" class="btn prev-step">Wstecz</button>
              <button type="button" class="btn next-step">Dalej</button>
            </div>
          </div>



          <!-- STEP 4 -->
          <div data-step="3">
            <h3>Wybierz organizacje, której chcesz pomóc:</h3>

            <div v-for="inst in institutions" v-bind:key="inst.id"  class="form-group form-group--checkbox">
              <label>
                <input 
        type="radio" name="answer" 
        :id="answer"
        :value="inst"
        v-model="institution">
                <span class="checkbox radio"></span>
                <span class="description">
                  <div class="title" >{{inst.name}}</div>
                  <div class="subtitle">
                    {{inst.description}}
                  </div>
                </span>
              </label>
            </div>

            

            <div class="form-group form-group--buttons">
              <button type="button" class="btn prev-step">Wstecz</button>
              <button type="button" class="btn next-step">Dalej</button>
            </div>
          </div>

          <!-- STEP 5 -->
          <div data-step="4">
            <h3>Podaj adres oraz termin odbioru rzecz przez kuriera:</h3>

            <div class="form-section form-section--columns">
              <div class="form-section--column">
                <h4>Adres odbioru</h4>
                <div class="form-group form-group--inline">
                  <label> Ulica <input type="text" name="address" v-model="street" /> </label>
                </div>

                <div class="form-group form-group--inline">
                  <label> Miasto <input type="text" name="city" v-model="city" /> </label>
                </div>

                <div class="form-group form-group--inline">
                  <label>
                    Kod pocztowy <input type="text" name="postcode" v-model="zipCode" />
                  </label>
                </div>

                <div class="form-group form-group--inline">
                  <label>
                    Numer telefonu <input type="phone" name="phone" v-model="phoneNumber"/>
                  </label>
                </div>
              </div>

              <div class="form-section--column">
                <h4>Termin odbioru</h4>
                <div class="form-group form-group--inline">
                  <label> Data <input type="date" name="data" v-model="pickUpDate"/> </label>
                </div>

                <div class="form-group form-group--inline">
                  <label> Godzina <input type="time" name="time" v-model="pickUpTime"/> </label>
                </div>

                <div class="form-group form-group--inline">
                  <label>
                    Uwagi dla kuriera
                    <textarea name="more_info" rows="5" v-model="pickUpComment"></textarea>
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group form-group--buttons">
              <button type="button" class="btn prev-step">Wstecz</button>
              <button type="button" class="btn next-step">Dalej</button>
            </div>
          </div>

          <!-- STEP 6 -->
          <div data-step="5">
            <h3>Podsumowanie Twojej darowizny</h3>

            <div class="summary">
              <div class="form-section">
                <h4>Oddajesz:</h4>
                <ul>
                  <li>
                    <span class="icon icon-bag"></span>
                    <span class="summary--text"
                      >{{quantity}} worki ubrań w dobrym stanie dla dzieci</span
                    >
                  </li>

                  <li>
                    <span class="icon icon-hand"></span>
                    <span class="summary--text"
                      >Dla fundacji {{institution.name}}</span
                    >
                  </li>
                </ul>
              </div>

              <div class="form-section form-section--columns">
                <div class="form-section--column">
                  <h4>Adres odbioru:</h4>
                  <ul>
                    <li>{{street}}</li>
                    <li>{{city}}</li>
                    <li>{{zipCode}}</li>
                    <li>{{phoneNumber}}</li>
                  </ul>
                </div>

                <div class="form-section--column">
                  <h4>Termin odbioru:</h4>
                  <ul>
                    <li>{{pickUpDate}}</li>
                    <li>{{pickUpTime}}</li>
                    <li>{{pickUpComment}}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="form-group form-group--buttons">
              <button type="button" class="btn prev-step">Wstecz</button>
              <button type="submit" class="btn" >Potwierdzam</button>
            </div>
          </div>
        </form>
      </div>
    </section>
     <footer-app />
  </div>
</template>

<script>
import '../assets/js/app.js'
import header from '../components/Header.vue'
import footer from '../components/Footer.vue'
import axios from "axios"
export default {
   components: {
      'header-app': header,
      'footer-app': footer,
  },
  data() {
    return{
      category: [],
      institutions: [],
      quantity: '',
      street: '',
      phoneNumber: '',
      zipCode: '',
      pickUpComment: '',
      pickUpDate: '',
      pickUpTime: '',
      institution: ''
    };
  },
  created() {
    axios.get(`http://localhost:8081/api/categories`)
    .then(response => {this.category = response.data
    })
    axios.get(`http://localhost:8081/api/institutions`)
    .then(response => {this.institutions = response.data
    })
  },
 methods: {
            formSubmit(e) {
                e.preventDefault();
                const pos = axios.post('http://localhost:8081/api/donation/', {
                    quantity: this.quantity,
                    street: this.street,
                    city: this.city,
                    phoneNumber: this.phoneNumber,
                    zipCode: this.zipCode,
                    pickUpComment: this.pickUpComment,
                    pickUpDate: this.pickUpDate,
                    pickUpTime: this.pickUpTime,
                    institutionId: this.institution.id
                    
                })
                .then(function(){
                   window.location.href = "/form-confirmation";

            })
                
                pos.data.data;
                pos.data.headers['Content-Type'];
            }
}
      
}
</script>

<style scoped>
@import "../assets/css/style.css"
</style>
