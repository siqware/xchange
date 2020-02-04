<template>
    <vx-card>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-input class="w-full" icon-pack="feather" icon="icon-credit-card" label-placeholder="ប្រាក់ទទួល"
                          v-model="data.get_money"/>
            </div>
            <div class="vx-col w-full mt-2">
                <vs-input class="w-full" icon-pack="feather" icon="icon-credit-card" label-placeholder="ប្រាក់ប្តូរ"
                          v-model="data.exchange_money"/>
            </div>
            <div class="vx-col w-full mt-3">
                <v-select placeholder="ប្តូរពី" v-model="data.currency_from" class="w-full" label="label"
                          :options="data.from_type"></v-select>
            </div>
            <div class="vx-col w-full mt-3 text-center">
                <label class="my-3">ទៅកាន់</label>
            </div>
            <div class="vx-col w-full mt-3">
                <v-select placeholder="ទៅកាន់" v-model="data.currency_to" class="w-full" label="label"
                          :options="data.to_type"></v-select>
            </div>
            <div class="vx-col w-full mt-3">
                <vs-button @click="exchange_result" color="primary" type="border" icon-pack="feather"
                           icon="icon-refresh-cw">ប្តូរ
                </vs-button>
            </div>
            <vs-divider>លទ្ធផល</vs-divider>
            <div class="vx-col w-full">
                <vs-input class="w-full" icon-pack="feather" icon="icon-credit-card" label-placeholder="ប្រាក់ប្តូរ"
                          v-model="data.result_get"/>
            </div>
            <div class="vx-col w-full mt-3">
                <vs-input class="w-full" icon-pack="feather" icon="icon-credit-card" label-placeholder="ប្រាក់អាប់"
                          v-model="data.result_remain"/>
            </div>
            <div class="vx-col w-full mt-3">
                <h5 class="text-primary">អត្រារប្តូរប្រាក់ : {{data.exchange_rate}}</h5>
            </div>
        </div>
    </vx-card>
</template>

<script>
    export default {
        name: "MoneyExchange",
        data() {
            return {
                data: {
                    input: '',
                    currency_from: {val: 'from_riel', label: 'រៀល'},
                    currency_to: {val: 'to_usd', label: 'ដុល្លារ'},
                    get_money: 0,
                    exchange_money: 0,
                    result_remain: 0,
                    result_get: 0,
                    exchange_rate: 0,
                    rate: {
                        riel_baht: 0.00761,
                        riel_usd: 0.00025,
                        usd_riel: 4088.18,
                        baht_riel: 131.277
                    },
                    from_type: [
                        {val: 'from_riel', label: 'រៀល'},
                        {val: 'from_usd', label: 'ដុល្លារ'},
                        {val: 'from_baht', label: 'បាត'},
                    ],
                    to_type: [
                        {val: 'to_riel', label: 'រៀល'},
                        {val: 'to_usd', label: 'ដុល្លារ'},
                        {val: 'to_baht', label: 'បាត'},
                    ],
                }
            }
        },
        methods: {
            exchange_result() {
                let self = this;
                if (self.data.currency_from && self.data.currency_to) {
                    if (self.data.currency_from.val === 'from_riel' && self.data.currency_to.val === 'to_baht') {
                        self.data.result_get = self.data.exchange_money * self.data.rate.riel_baht;
                        self.data.exchange_rate = self.data.rate.riel_baht;
                    } else if (self.data.currency_from.val === 'from_riel' && self.data.currency_to.val === 'to_usd') {
                        self.data.result_get = self.data.exchange_money * self.data.rate.riel_usd;
                        self.data.exchange_rate = self.data.rate.riel_usd;
                    } else if (self.data.currency_from.val === 'from_usd' && self.data.currency_to.val === 'to_riel') {
                        self.data.result_get = self.data.exchange_money * self.data.rate.usd_riel;
                        self.data.exchange_rate = self.data.rate.usd_riel;
                    } else if (self.data.currency_from.val === 'from_baht' && self.data.currency_to.val === 'to_riel') {
                        self.data.result_get = self.data.exchange_money * self.data.rate.baht_riel;
                        self.data.exchange_rate = self.data.rate.baht_riel;
                    } else {
                        self.$vs.notify({
                            text: 'ខុសគោលការណ៍ប្តូរប្រាក់ហើយ! សូមជ្រើសរើសអោយបានត្រឹមត្រូវ!',
                            color: 'warning',
                            position: 'top-center'
                        });
                    }
                    self.data.result_remain = self.data.get_money - self.data.exchange_money;
                } else {
                    this.$vs.notify({
                        text: 'សូមជ្រើសរើសការប្តូរអោយបានត្រឹមត្រូវ!',
                        color: 'warning',
                        position: 'top-center'
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>