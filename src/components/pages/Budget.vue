<template>
<div class="container pt-5">
    <div class="row">
        <div class="col-12">

            <div class="content-box bg-light">
                <h2 class="text-center">Budget</h2>
                <div class="display">
                    <h2 class="text-center display-3">{{calcGrandTotal}}</h2>
                </div>
                <div class="income-total">Total Income: {{totalIncome}}</div>
                <div class="expense-total">Total Expense: {{totalExpense}}</div>

                <div id="inputs">

                    <select v-model="input.type" class="browser-default custom-select m-3" id="type">

                        <option value="income">+</option>
                        <option value="expense">-</option>

                    </select>

                    <input ref="description" type="text" v-model="input.description" class="form-control m-3" id="description" placeholder="description">

                    <input @keyup.enter="addToList" type="number" v-model="input.value" class="form-control m-3" id="value">

                    <button @click="addToList" class="btn btn-primary m-3" id="budget_submit">Submit</button>

                </div>
                <!-- <p>{{input.description}}</p> -->
                <button @click="saveData" class="btn btn-success">Save Data</button>

            </div>

        </div>
    </div>

    <div class="row pt-5">
        <div class="col-md-6 col-sm-12">
            <div class="content-box bg-light">
                <h2 class="text-center">Income</h2>

                <div class="list-box">

                    <ul class="list-group">
                        <li :key="index" v-for="(income,index) in allIncomes" class="list-group-item income-item">{{income.description}} ${{income.value}} <span @click="allIncomes.splice(index,1)" class="delete-card">X</span></li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="content-box bg-light">
                <h2 class="text-center">Expense</h2>
                <div class="list-box">

                    <ul class="list-group">
                        <li :key="index" v-for="(expense,index) in allExpenses" class="list-group-item expense-item">{{expense.description}} - ${{expense.value}} <span @click="allExpenses.splice(index,1)" class="delete-card">X</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            grandTotal: 0,
            totalIncome: 0,
            totalExpense: 0,

            allExpenses: [],
            allIncomes: [],

            input: {
                type: 'income',
                description: null,
                value: 0
            }
        }
    },
    methods: {
        addToList() {

            if (!this.input.description == " " && !this.input.value == '0') {
                if (this.input.type == "income") {
                    this.allIncomes.push({
                        type: this.input.type,
                        description: this.input.description,
                        value: this.input.value
                    });
                    this.totalIncome += parseInt(this.input.value);
                } else if (this.input.type == "expense") {
                    this.allExpenses.push({
                        type: this.input.type,
                        description: this.input.description,
                        value: this.input.value
                    });
                    this.totalExpense -= parseInt(this.input.value);
                }

            }

            console.log(this.allIncomes);

            this.input.description = null;
            this.input.value = 0;
            this.$refs.description.focus();

        },
        saveData() {

            fetch('https://modular-planner.firebaseio.com/budget.json', {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify({
                    grandTotal: this.calcGrandTotal,
                    allIncomes: this.allIncomes,
                    allExpenses: this.allExpenses
                }),

            }).then(response => {
                if (response.ok) {
                    //....
                } else {
                    throw new Error('Could not save data!');
                }
            }).catch(error => {
                console.log(error);
                this.error = error.message;
            })
        }
    },
    computed: {
        calcGrandTotal() {
            return this.grandTotal = this.totalIncome + this.totalExpense;
        },

    }
}
</script>

<style lang="scss" scoped>
.expense-item {
    background-color: #ff00006b;
}

.income-item {
    background-color: #00800070;
}

#value {
    width: 20%
}

#type {
    width: 20%;
}

#inputs {
    display: flex;
    padding: 1rem;
}

li:hover {
    background: grey;
    color: white;
}

.list-box {
    overflow: scroll;
    height: 400px;
}

.delete-card {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 15px;
    opacity: .4;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover,
    .error {
        opacity: 1;
        transform: rotate(360deg);

    }
}

.flip-enter-active {
    transition: all 0.4s ease;
}

.flip-leave-active {
    display: none;
}

.flip-enter,
.flip-leave {
    transform: rotateY(180deg);
    opacity: 0;

}
</style>
