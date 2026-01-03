<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME, TRANSCRIPT } from '../../lib/params';

	const { item, title } = RESUME;
	const { item: transcriptItem, title: transcriptTitle } = TRANSCRIPT;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if item}
			<a href={item}>
				<Chip size={'1.25em'}>{title} Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
		{#if transcriptItem}
			<a href={transcriptItem}>
				<Chip size={'1.25em'}>{transcriptTitle} Download</Chip>
			</a>
		{:else}
			<Chip>No Transcript at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
