<script lang="ts">
  import { base } from '$app/paths';

  let count = $state(0);

  const increment = () => {
    count += 1;
  };
</script>

<h1>Hello</h1>
<p>count: {count}</p>
<button onclick={increment}>Increment</button>
<a href="{base}/subpage">Hm....</a>
