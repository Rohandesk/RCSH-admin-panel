// export default function Page() {
//   return (
//     <h1>Home page!</h1>
//   )
// }
// MUI Imports


// Third-party Imports
import CustomAvatar from '@/@core/components/mui/Avatar'
import OptionMenu from '@/@core/components/option-menu'
import { Card, CardContent, CardHeader, Chip, Grid, Typography } from '@mui/material'
import classnames from 'classnames'
import { db } from '@/data/academy'
import CourseTable from '@/views/dashboard/CourseTable'
// Components Imports


// Vars
const data = [
  {
    title: '$8.45k',
    subtitle: 'United States',
    trendNumber: 25.8,
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$7.78k',
    subtitle: 'Brazil',
    trendNumber: 16.2,
    trend: 'negative',
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$6.48k',
    subtitle: 'India',
    trendNumber: 12.3,
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$5.12k',
    subtitle: 'Australia',
    trendNumber: 11.9,
    trend: 'negative',
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$4.45k',
    subtitle: 'France',
    trendNumber: 16.2,
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$3.90k',
    subtitle: 'China',
    trendNumber: 14.8,
    imgSrc: '/images/cards/india.png'
  }
]

const data2 = [
  {
    title: 'Emails',
    amount: '12,346',
    trendNumber: '0.3%',
    avatarColor: 'success',
    icon: 'tabler-mail'
  },
  {
    title: 'Opened',
    amount: '8,734',
    trendNumber: '2.1%',
    avatarColor: 'info',
    icon: 'tabler-link'
  },
  {
    title: 'Clicked',
    amount: '967',
    trendNumber: '1.4%',
    trend: 'negative',
    avatarColor: 'warning',
    icon: 'tabler-mouse'
  },
  {
    title: 'Subscribe',
    amount: '345',
    trendNumber: '8.5%',
    avatarColor: 'primary',
    icon: 'tabler-users'
  },
  {
    title: 'Complaints',
    amount: '10',
    trendNumber: '1.5%',
    trend: 'negative',
    avatarColor: 'secondary',
    icon: 'tabler-alert-triangle'
  },
  {
    title: 'Unsubscribe',
    amount: '86',
    trendNumber: '0.8%',
    avatarColor: 'error',
    icon: 'tabler-ban'
  }
]

const data3 = [
  {
    title: 'Direct Source',
    subtitle: 'Direct link click',
    amount: '1.2k',
    trendNumber: 4.2,
    icon: 'tabler-shadow'
  },
  {
    title: 'Social Networks',
    subtitle: 'Social Channels',
    amount: '31.5k',
    trendNumber: 8.2,
    icon: 'tabler-globe'
  },
  {
    title: 'Email Newsletter',
    subtitle: 'Mail Campaigns',
    amount: '893',
    trendNumber: 2.4,
    icon: 'tabler-mail'
  },
  {
    title: 'Referrals',
    subtitle: 'Impact Radius Visits',
    amount: '342',
    trendNumber: 0.4,
    trend: 'negative',
    icon: 'tabler-external-link'
  },
  {
    title: 'ADVT',
    subtitle: 'Google ADVT',
    amount: '2.15k',
    trendNumber: 9.1,
    icon: 'tabler-ad'
  },
  {
    title: 'Other',
    subtitle: 'Many Sources',
    amount: '12.5k',
    trendNumber: 6.2,
    icon: 'tabler-star'
  }
]

const SalesByCountries = () => {
  return (
    <>
    <Grid container spacing={6} mb={6}>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Card>
          <CardHeader
            title='Sales by Countries'
            subheader='Monthly Sales Overview'
            action={<OptionMenu options={['Last Week', 'Last Month', 'Last Year']} />}
          />
          <CardContent className='flex flex-col gap-[1.0875rem]'>
            {data.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <img src={item.imgSrc} alt={item.subtitle} width={34} />
                <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
                  <div className='flex flex-col'>
                    <Typography className='font-medium' color='text.primary'>
                      {item.title}
                    </Typography>
                    <Typography variant='body2'>{item.subtitle}</Typography>
                  </div>
                  <div className='flex items-center gap-1'>
                    <i
                      className={classnames(
                        item.trend === 'negative' ? 'tabler-chevron-down text-error' : 'tabler-chevron-up text-success',
                        'text-xl'
                      )}
                    />
                    <Typography
                      variant='h6'
                      color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}
                    >{`${item.trendNumber}%`}</Typography>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Card>
      <CardHeader
        title='Monthly Campaign State'
        subheader='8.52k Social Visitors'
        action={<OptionMenu options={['Last Month', 'Last 6 Months', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-6 md:gap-[1.6875rem]'>
        {data2.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={34}>
              <i className={classnames(item.icon, 'text-[22px]')} />
              {/* {item.icon} */}
            </CustomAvatar>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <Typography
                  className='flex justify-end is-11'
                  color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}
                >
                  {item.trendNumber}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Card>
          <CardHeader
            title='Source Visits'
            subheader='38.4k Visitors'
            action={<OptionMenu options={['Last Week', 'Last Month', 'Last Year']} />}
          />
          <CardContent className='flex flex-col gap-6 md:gap-[1.0875rem] lg:gap-[1.5875rem]'>
            {data3.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <CustomAvatar skin='light' variant='rounded' size={34}>
                  <i className={classnames(item.icon, 'text-[22px] text-textSecondary')} />
                </CustomAvatar>
                <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
                  <div className='flex flex-col'>
                    <Typography className='font-medium' color='text.primary'>
                      {item.title}
                    </Typography>
                    <Typography variant='body2'>{item.subtitle}</Typography>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Typography>{item.amount}</Typography>
                    <Chip
                      variant='tonal'
                      size='small'
                      color={item.trend === 'negative' ? 'error' : 'success'}
                      label={`${item.trend === 'negative' ? '-' : '+'}${item.trendNumber}%`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
      <CourseTable courseData={db?.courses} />
    </>
  )
}

export default SalesByCountries

