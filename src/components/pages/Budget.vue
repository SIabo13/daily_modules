<template>
<div class="container pt-5">
    <div class="row">
        <div class="col">

            <div class="content-box bg-light">
                <h2 class="text-center">Budget</h2>
                <div class="display">
                    <h2 class="text-center display-3">500</h2>
                </div>
                <div class="income-total">Total Income: 200</div>
                <div class="expense-total">Total Expense:-400</div>
            </div>

        </div>
    </div>

    <div class="row pt-5">
        <div class="col-md-6">
            <div class="content-box bg-light">
                <h2 class="text-center">Income</h2>

                <div class="list-box" v-show="!showForm">
                    <ul class="list-group">
                        <div class="list-box">

                            <ul class="list-group">
                                <app-list-item v-for="(item,index) in todoList">{{ item }}<span @click="todoList.splice(index,1)" class="delete-card">X</span></app-list-item>
                                <li v-for="(income,index) in allIncomes" class="list-group-item">{{income.description}} ${{income.value}} <span @click="allIncomes.splice(index,1)" class="delete-card">X</span></li>
                            </ul>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="content-box bg-light">
                <h2 class="text-center">Expense</h2>
                <div class="list-box">

                    <ul class="list-group">
                        <app-list-item v-for="(item,index) in todoList">{{ item }}<span @click="todoList.splice(index,1)" class="delete-card">X</span></app-list-item>
                        <li v-for="(expense,index) in allExpenses" class="list-group-item">{{expense.description}} ${{expense.value}} <span @click="allExpenses.splice(index,1)" class="delete-card">X</span></li>
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

            allExpenses: [{
                    type: "expense",
                    description: "Purchased the new iphone",
                    value: 200
                },
                {
                    type: "expense",
                    description: "Purchased the new iphone",
                    value: 200
                },

            ],
            allIncomes: [{
                type: "income",
                description: "Recieved Paycheck",
                value: 600
            }],

            input: {
                type: null,
                description: null,
                value: null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
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
