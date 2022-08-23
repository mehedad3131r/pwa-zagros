import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section >
			<h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200' >
				ایرانیان زاگرس 
			</h2>

			<div className='mt-2'>
				<p className='text-gray-600 dark:text-gray-400'>
					    باشگاه ایرانیان زاگرس    
              {' '}<span className='font-medium text-gray-900 dark:text-gray-50'> 

				بهترین کیفیت
					</span>{' '}
					در جهان
				</p>

				<br />
				<br />
				<br />

				
			</div>

			<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">


			<div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">دوره فوتبال </div>
        <div className="mt-2">
        <br/>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="accountType" value="personal"/>
            <span className="ml-2">ساعت 1-3</span>
          </label>
          <br/>
          <label className="inline-flex items-center ml-6">
            <input type="radio" className="form-radio" name="accountType" value="busines"/>
            <span className="ml-2">تاریخ 1401/10/11</span>
          </label>
          <br/>
          <label className="inline-flex items-center ml-6">
            <input type="radio" className="form-radio" name="accountType" value="busines"/>
            <span className="ml-2">مربی: حسینی</span>
          </label>
          <br/><br/>
		  <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">ثبت نام</button>
        </div>
        </div>
        </div>

		<div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> ترم مهر والیبال</div>
        <div className="mt-2">
        <br/>
        <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="accountType" value="personal"/>
            <span className="ml-2">ساعت 3-5</span>
          </label>
          <br/>
          <label className="inline-flex items-center ml-6">
            <input type="radio" className="form-radio" name="accountType" value="busines"/>
            <span className="ml-2">تاریخ 1401/10/11</span>
          </label>
          <br/>
          <label className="inline-flex items-center ml-6">
            <input type="radio" className="form-radio" name="accountType" value="busines"/>
            <span className="ml-2">مربی: حسنی</span>
          </label>
          <br/><br/>
		  <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">ثبت نام</button>
        </div>
        </div>
        </div>


		</div>
		
		</Section>
	</Page>
)

export default Index
