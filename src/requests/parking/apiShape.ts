export default (checker) => checker.arrayOf(
  checker.shape({
    suspended_dates: checker.arrayOf(
      checker.number
    ),
    text: checker.string
  })
)
