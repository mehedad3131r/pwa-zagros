import Page from '@/components/page'
import Section from '@/components/section'

const Loginpage = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Ingredients</h2>

			<div className='mt-2'>
				<p className='text-gray-600 dark:text-gray-400'>
					Like any good recipe, we appreciate community offerings to cultivate a
					delicous dish.
				</p>
			</div>
		</Section>

		<Section>
			<h3 className='font-medium'>Thanks to</h3>

			<ul className='space-y-2 px-6 py-2 list-disc'>
				<li className='text-sm text-gray-600 dark:text-gray-400'>
					<a href='https://unsplash.com' className='underline'>
						Unsplash
					</a>{' '}
					for high quality images
				</li>

				<li className='text-sm text-gray-600 dark:text-gray-400'>
					<a href='https://teenyicons.com' className='underline'>
						Teenyicons
					</a>{' '}
					for lovely icons
				</li>
			</ul>
		</Section>
	</Page>
)

export default Loginpage