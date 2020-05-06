<template>
  <div class="wrapper">
    <ul class="content">
      <li>选项1</li>
      <li>选项2</li>
      <li>选项3</li>
      <li>选项4</li>
      <li>选项5</li>
      <li>选项6</li>
      <li>选项7</li>
      <li>选项8</li>
      <li>选项9</li>
      <li>选项10</li>
      <li>选项11</li>
      <li>选项12</li>
      <li>选项13</li>
      <li>选项14</li>
      <li>选项15</li>
      <li>选项16</li>
      <li>选项17</li>
      <li>选项18</li>
      <li>选项19</li>
      <li>选项20</li>
      <li>选项21</li>
      <li>选项22</li>
      <li>选项23</li>
      <li>选项24</li>
      <li>选项25</li>
      <li>选项26</li>
      <li>选项27</li>
      <li>选项28</li>
      <li>选项29</li>
      <li>选项30</li>
      <li>选项31</li>
      <li>选项32</li>
      <li>选项33</li>
      <li>选项34</li>
      <li>选项35</li>
      <li>选项36</li>
      <li>选项37</li>
      <li>选项38</li>
      <li>选项39</li>
      <li>选项40</li>
      <li>选项41</li>
      <li>选项42</li>
      <li>选项43</li>
      <li>选项44</li>
      <li>选项45</li>
      <li>选项46</li>
      <li>选项47</li>
      <li>选项48</li>
      <li>选项49</li>
      <li>选项50</li>
      <li>选项51</li>
      <li>选项52</li>
      <li>选项53</li>
      <li>选项54</li>
      <li>选项55</li>
      <li>选项56</li>
      <li>选项57</li>
      <li>选项58</li>
      <li>选项59</li>
      <li>选项60</li>
      <li>选项61</li>
      <li>选项62</li>
      <li>选项63</li>
      <li>选项64</li>
      <li>选项65</li>
      <li>选项66</li>
      <li>选项67</li>
      <li>选项68</li>
      <li>选项69</li>
      <li>选项70</li>
      <li>选项71</li>
      <li>选项72</li>
      <li>选项73</li>
      <li>选项74</li>
      <li>选项75</li>
      <li>选项76</li>
      <li>选项77</li>
      <li>选项78</li>
      <li>选项79</li>
      <li>选项80</li>
      <li>选项81</li>
      <li>选项82</li>
      <li>选项83</li>
      <li>选项84</li>
      <li>选项85</li>
      <li>选项86</li>
      <li>选项87</li>
      <li>选项88</li>
      <li>选项89</li>
      <li>选项90</li>
      <li>选项91</li>
      <li>选项92</li>
      <li>选项93</li>
      <li>选项94</li>
      <li>选项95</li>
      <li>选项96</li>
      <li>选项97</li>
      <li>选项98</li>
      <li>选项99</li>
      <li>选项100</li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'


  export default {
    name: "CateGory",
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{})
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: red;
    /*overflow-y: scroll;*/
    overflow-y: hidden;
  }
</style>
