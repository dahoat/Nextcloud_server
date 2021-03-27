 <!--
  - @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @author John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program.  If not, see <http://www.gnu.org/licenses/>.
  -
  -->
<template>
	<Content app-name="unsupported-browser" class="content-unsupported-browser">
		<EmptyContent>
			{{ t('core', 'This browser is not supported') }}
			<template #icon>
				<Web />
			</template>
			<template #desc>
				{{ t('core', 'Please upgrade to a more recent browser') }}
				<ul class="content-unsupported-browser__list">
					<h3>{{ t('core', 'Supported versions') }}</h3>
					<li v-for="browser in formattedBrowsersList" :key="browser">
						{{ browser }}
					</li>
				</ul>
			</template>
		</EmptyContent>
	</Content>
</template>

<script>
import { translate as t, translatePlural as n } from '@nextcloud/l10n'

import Content from '@nextcloud/vue/dist/Components/Content'
import EmptyContent from '@nextcloud/vue/dist/Components/EmptyContent'
import Web from 'vue-material-design-icons/Web'
// eslint-disable-next-line node/no-extraneous-import
import { agents } from 'caniuse-lite'

export default {
	name: 'UnsupportedBrowser',
	components: {
		Web,
		Content,
		EmptyContent,
	},
	computed: {
		formattedBrowsersList() {
			const list = {}
			supportedBrowsers.forEach(browser => {
				const [id, version] = browser.split(' ')
				if (!list[id] || list[id] < parseFloat(version, 10)) {
					list[id] = parseFloat(version, 10)
				}
			})
			console.info(list)
			return Object.keys(list).map(id => {
				const version = list[id]
				const name = agents[id].browser
				return this.t('core', '{name} version {version} and above', {
					name, version,
				})
			})
		},
	},
	methods: {
		t,
		n,
	},
}
</script>

<style lang="scss">
.content-unsupported-browser {
	display: flex;
	width: 100%;
	justify-content: center;
	color: #fff;

	.empty-content {
		margin: auto;
	}

	&__list {
		margin-top: 60px;
		li {
			text-align: left;
		}
	}
}
</style>
