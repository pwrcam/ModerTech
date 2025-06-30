<template>
    <tr v-if="typeof t.dates == 'string'">
        <td data-label="Employee">{{ t?.employeeName }}</td>
        <td data-label="Number">{{ t?.employeeNum }}</td>
        <td data-label="Dates">{{ t?.dates }}</td>
        <td data-label="Reason">{{ t?.reason }}</td>
        <td data-label="Status">{{ t?.status }}</td>
        <td data-label="Action">
            <button class="button1" @click="updateRequestStatus(t.id, 'Approved')">Approve</button>
            <button class="button2" @click="updateRequestStatus(t.id, 'Denied')">Deny</button>
        </td>
    </tr>
    <tr class="border" v-else v-for="(d, index) in t.dates">
        <td data-label="Employee">{{ t?.employeeName }}</td>
        <td data-label="Number">{{ t?.employeeNum }}</td>
        <td data-label="Dates">{{ d?.dates }}</td>
        <td data-label="Reason">{{ d?.reason }}</td>
        <td data-label="Status">{{ d?.status }}</td>
        <td data-label="Action">
            <button class="button1" @click="updateRequestStatus(index, 'Approved')">Approve</button>
            <button class="button2" @click="updateRequestStatus(index, 'Denied')">Deny</button>
        </td>
    </tr>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props: ['t'],
    methods: {
        updateRequestStatus(index, newStatus) {
            if (this.t.status) {
                this.t.status = newStatus;
            } else {
                this.t.dates[index].status = newStatus
            }
        },
    }
}
</script>
<style scoped>

button {
    margin-right: 10px;
}

.button1 {
    background-color: lightgreen;
    border-radius: 6px;
}

.button2 {
    background-color: lightcoral;
    border-radius: 5px;
}

</style>