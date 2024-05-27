<template>
  <div class="search-bar">
    <div class="container">
      <div id="cover">
        <form method="get" action="">
          <div class="tb">
            <div class="td"><input type="text" placeholder="Куда хотите отправиться?" required></div>
            <div class="td" id="s-cover">
              <button type="submit">
                <svg width="70" height="70" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m21.75 20.063-5.816-5.818a7.523 7.523 0 0 0 1.44-4.433c0-4.17-3.393-7.562-7.562-7.562-4.17 0-7.562 3.392-7.562 7.562s3.392 7.562 7.562 7.562a7.523 7.523 0 0 0 4.433-1.44l5.818 5.816 1.687-1.688ZM9.812 14.986a5.174 5.174 0 1 1-.002-10.35 5.174 5.174 0 0 1 0 10.349Z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.tb {
  display: table;
  width: 100%;
}

.td {
  display: table-cell;
  vertical-align: middle;
}

#cover input,
#cover button {
  color: black;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
}

#cover {
  display: flex;
    width: 950px;
    padding: 15px;
    height: auto;
    max-height: 80px;
    border-radius: 15rem;
    align-items: center;
    justify-content: center;
    background-color: white;
box-shadow: 0 10px 40px #417add, 0 0 0 20px #ffffffeb;
}

.search-bar {
  display: flex;
  justify-content: center;
}
#cover form {
  height: 96px;
  width: 900px;
}

#cover input[type="text"] {
  width: 100%;
  height: auto;
  font-size: 30px;
  line-height: 1;
  /* outline: none; */
}

#cover input[type="text"]::placeholder {
  color: #417add;
}

#s-cover {
  width: 1px;
  padding-left: 35px;
}

#cover button {
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  cursor: pointer;
  color: #417add;
  margin-right: -30px;
}

</style>