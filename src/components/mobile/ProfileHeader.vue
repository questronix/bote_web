<template>
    <div class="profile-header">
        <div class="profile-top">
            <a href="../dashboard"><i class="material-icons">arrow_back</i> </a>
        </div>
        <div class="profile-details">
            <img id="prof-pic" src="https://www.w3schools.com/howto/img_avatar.png" />
            <p id="name">Name</p>
        </div>
        <div class="location">
            <i class="material-icons">place</i>
            <p id="loc">Location</p>
        </div>
        <div class="about">
            <p id="bio">If you want to drink hit me up!</p>
             <i class="material-icons">edit</i>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                data: 0
            };
        },
        methods: {
            
        }
    }
</script>

<style scoped>

.profile-header {
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    color: #f2f2f2;
    font-size: 15px;
    font-weight: 100;
}

.profile-header .profile-details img{

    display: block;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: #DDD;
    border: 5px solid #CD7D0B;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;

}

#name{
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    color: #f2f2f2;
}
#loc{
    font-size: 15px;
    color: #f2f2f2;
}
.profile-top {
    width: 100%;
}

.profile-top i{
    color: #f2f2f2;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 20px;
}


.location i{
    color: #CD7D0B;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 15px;
}

.location{
    align-self: center;
    display: inline-flex;
    margin-top: -30px;
    margin-right: 20px;
}

.about{
    margin-left: 10px;
    margin-top: -10px;
    align-self: center;
    display: inline-flex;
}
.about i{
    margin-top: 18px;
    margin-left: 5px;
    color: #CD7D0B;
    font-size: 12px;
    
}

#bio{
    font-size: 12px;
    color: #f2f2f2;
}
</style>