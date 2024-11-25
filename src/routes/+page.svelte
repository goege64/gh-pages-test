<script lang="ts">
  let count = $state(0);

  const increment = () => {
    count += 1;
  };
</script>

<h1>Hello</h1>
<p>count: {count}</p>
<button onclick={increment}>Increment</button>
<a href="/subpage">Hm....</a>
