'use client'
import CustomAutocomplete from "@/@core/components/mui/Autocomplete"
import CustomIconButton from "@/@core/components/mui/IconButton"
import CustomTextField from "@/@core/components/mui/TextField"
import { Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, Grid, IconButton, InputAdornment, MenuItem, Typography } from "@mui/material"
import { useState } from "react"
import Link from 'next/link'

export default function Page() {
  const [furnishingDetails, setFurnishingDetails] = useState(['Fridge', 'AC', 'TV'])
  const furnishingArray = [
  'AC',
  'TV',
  'RO',
  'Bed',
  'WiFi',
  'Sofa',
  'Fridge',
  'Cupboard',
  'Microwave',
  'Dining Table',
  'Washing Machine'
]
  return (
    <Card>
      <CardHeader title='Multi Column with Form Separator' />
      <Divider />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12 }}>
              <Typography variant='body2' className='font-medium'>
                1. Account Details
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                label='UserName'
                placeholder='johnDoe '
                // value={formData.username}
                // onChange={e => setFormData({ ...formData, username: e.target.value })}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                type='email'
                label='Email'
                // value={formData.email}
                placeholder='johndoe@gmail.com'
                // onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                label='Password'
                placeholder='············'
                id='form-layout-separator-password'
                // type={formData.isPasswordShown ? 'text' : 'password'}
                // value={formData.password}
                // onChange={e => setFormData({ ...formData, password: e.target.value })}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          // onClick={handleClickShowPassword}
                          onMouseDown={e => e.preventDefault()}
                          aria-label='toggle password visibility'
                        >
                          {/* <i className={formData.isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} /> */}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                label='Confirm Password'
                placeholder='············'
                id='form-layout-separator-confirm-password'
                // type={formData.isConfirmPasswordShown ? 'text' : 'password'}
                // value={formData.confirmPassword}
                // onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          // onClick={handleClickShowConfirmPassword}
                          onMouseDown={e => e.preventDefault()}
                          aria-label='toggle confirm password visibility'
                        >
                          {/* <i className={formData.isConfirmPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} /> */}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CustomAutocomplete
          fullWidth
          multiple
          value={furnishingDetails}
          onChange={(event, value) => setFurnishingDetails(value)}
          id='select-furnishing-details'
          options={furnishingArray}
          defaultValue={furnishingDetails}
          getOptionLabel={option => option || ''}
          renderInput={params => <CustomTextField {...params} label='Furnishing Details' />}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => <Chip label={option} size='small' {...getTagProps({ index })} key={index} />)
          }
        />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant='body2' className='font-medium'>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                label='First Name'
                placeholder='John'
                // value={formData.firstName}
                // onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                label='Last Name'
                placeholder='Doe'
                // value={formData.lastName}
                // onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                select
                fullWidth
                label='Country'
                id='country'
                // value={formData.country}
                // onChange={e => setFormData({ ...formData, country: e.target.value })}
              >
                <MenuItem value=''>Select Country</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                select
                fullWidth
                label='Language'
                // value={formData.language}
                // slotProps={{
                //   select: {
                //     multiple: true,
                //     onChange: e => setFormData({ ...formData, language: e.target.value })
                //   }
                // }}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              {/* <AppReactDatepicker
                selected={formData.date}
                showYearDropdown
                showMonthDropdown
                onChange={date => setFormData({ ...formData, date })}
                placeholderText='MM/DD/YYYY'
                customInput={<CustomTextField fullWidth label='Birth Date' placeholder='MM-DD-YYYY' />}
              /> */}
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomTextField
                fullWidth
                label='Phone Number'
                type='number'
                placeholder='123-456-7890'
                // value={formData.phoneNumber}
                // onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type='submit' variant='contained' className='mie-2'>
            Submit
          </Button>
          <Button
            type='reset'
            variant='tonal'
            color='secondary'
            onClick={() => {
              handleReset()
            }}
          >
            Reset
          </Button>
        </CardActions>
      </form>
      <CustomIconButton 
      component={Link}
      variant='contained'
      href='https://1.envato.market/vuexy_admin'
      color='primary'
      target='_blank' className='rounded text-white bg-facebook'>
        <i className='tabler-brand-facebook' />
      </CustomIconButton>
    </Card>
  )
}
