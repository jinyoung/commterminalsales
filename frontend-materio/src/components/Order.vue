<template>
    <div>
        <String label="ProductId" v-model="value.productId" :editMode="editMode"/>
        <String label="Options" v-model="value.options" :editMode="editMode"/>
        <String label="CustomerId" v-model="value.customerId" :editMode="editMode"/>
        <String label="Address" v-model="value.address" :editMode="editMode"/>
        <String label="InsuranceOption" v-model="value.insuranceOption" :editMode="editMode"/>
        <StringDetailGrid label="Options" offline v-model="value.options" :editMode="editMode" @change="change"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>

import BaseEntity from './base-ui/BaseEntity.vue'
import String from './primitives/String.vue'
import String from './primitives/String.vue'
import StringDetailGrid from './ui/StringDetailGrid.vue'

export default {
    name: 'Order',
    mixins:[BaseEntity],
    components:{
        String,
        String,
        StringDetailGrid,
    },
    
    data: () => ({
        path: "orders"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
