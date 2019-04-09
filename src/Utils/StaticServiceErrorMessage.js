export const defaultServiceError = () => {
  return {
    ServiceCallStatus: {
      loader: false,
      Exception: {
        code: 400,
        message: "İşleminizi şuanda gerçekleştiremiyoruz."
      }
    },
  }

}