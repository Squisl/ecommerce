export default (start, end, duration, setState) => {
  const range = end - start
  // Never allow timer less than 50 ms long
  const minTimer = 50
  // Calculate time interval to show the numbers
  let stepTime = Math.abs(Math.floor(duration / range))
  stepTime = Math.max(stepTime, minTimer)
  // Get current time and calculate desired time
  const startTime = new Date().getTime()
  const endTime = startTime + duration

  const run = () => {
    const now = new Date().getTime()
    // Calculate the remaining percentage of the time
    const remaining = Math.max((endTime - now) / duration, 0)
    const value = Math.round(end - remaining * range)
    setState(value)
    if (value == end) {
      clearInterval(timer)
    }
  }

  const timer = setInterval(run, stepTime)
  run()
}
