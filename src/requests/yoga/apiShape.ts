export default (checker) => checker.arrayOf(
  checker.shape({
    className: checker.string,
    instructorName: checker.string,
    time: checker.string,
    timestamp: checker.number
  })
)
