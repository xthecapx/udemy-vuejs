<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link 
                tag="li" 
                to="/userhome/1"
                class="list-group-item" 
                style="cursor: pointer">User 1</router-link>
            <router-link 
                to="/userhome/2"
                class="list-group-item" 
                style="cursor: pointer"
                tag="li" >User 2</router-link>
            <router-link
                to="/userhome/3"
                tag="li"  
                class="list-group-item" 
                style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>