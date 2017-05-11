<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }} </p>
        <div style="height: 700px"></div>
        <button class="btn btn-primary">Confirm</button>
        <p id="data">Analytics: {{ $route.query.q }} </p>
    </div>
</template>