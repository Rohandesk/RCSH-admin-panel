//  returns the appropriate image URL based on the current color mode (light or dark) and the selected theme settings (like "bordered" skin)
// React Imports
import { useMemo } from 'react'

// Third-party imports
import { useColorScheme } from '@mui/material'

// Hook Imports
import { useSettings } from './useSettings'

export const useImageVariant = (mode, imgLight, imgDark, imgLightBordered, imgDarkBordered) => {
  // Hooks
  const { settings } = useSettings()
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme()

  return useMemo(() => {
    const currentMode = muiMode === 'system' ? muiSystemMode : muiMode || mode
    const isBordered = settings?.skin === 'bordered'
    const isDarkMode = currentMode === 'dark'

    if (isBordered && imgLightBordered && imgDarkBordered) {
      return isDarkMode ? imgDarkBordered : imgLightBordered
    }

    return isDarkMode ? imgDark : imgLight
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, muiMode, muiSystemMode])
}
