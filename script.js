new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
      dialog: false,
      headers: [
        { text: 'Terrain', value: 'name', align: 'right' },
        { text: 'Prix', value: 'price', align: 'right' },
        { text: 'Size', value: 'size_id', align: 'right' },
        { text: 'Horaire', value: 'schedule_id', align: 'right' },
        { text: 'Unknown', value: 'name', align: 'right' },
        { text: 'Actions', value: 'name', sortable: false, align: 'center' },
      ],
      terrains: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        price: 0,
        size_id: 0,
        schedule_id: 0,
        name: '',
      },
      defaultItem: {
        name: '',
        price: 0,
        size_id: 0,
        schedule_id: 0,
        name: '',
      },
    }),
  
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
      },
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
  
    created() {
      this.initialize();
    },
  
    methods: {
      initialize() {
        this.terrains = [
          { name: 'T11', price: 350, size_id: 1, schedule_id: 17 },
          { name: 'T2', price: 300, size_id: 1, schedule_id: 17 },
          { name: 'T3', price: 300, size_id: 1, schedule_id: 17 },
        ];
      },
  
      editItem(item) {
        this.editedIndex = this.terrains.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
  
      deleteItem(item) {
        const index = this.terrains.indexOf(item);
        confirm('Are you sure you want to delete this item?') &&
          this.terrains.splice(index, 1);
      },
  
      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300);
      },
  
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.terrains[this.editedIndex], this.editedItem);
        } else {
          this.terrains.push(this.editedItem);
        }
        this.close();
      },
    },
  });
  
