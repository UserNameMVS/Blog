import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Button } from 'shared/ui'
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла ошибка при загрузке страницы')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
