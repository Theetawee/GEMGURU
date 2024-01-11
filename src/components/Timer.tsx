import useTime from "../hooks/useTime"


const Timer = () => {

    const timeRemaining = useTime();


  return (
      <>
          {timeRemaining.days === 0 &&
          timeRemaining.hours === 0 &&
          timeRemaining.minutes === 0 &&
          timeRemaining.seconds === 0 ? (
              <p className="text-lg text-white mb-4">
                  The business is now open! Come explore our collection.
              </p>
          ) : (
              <div className="mb-8">
                  <p className="text-lg text-white mb-2">We're opening soon!</p>
                  <div className="flex items-center">
                      <div className="mr-2">
                          <span className="text-2xl font-bold text-white">
                              {timeRemaining.days}
                          </span>
                          <span className="text-sm text-gray-300 ml-1">d</span>
                      </div>
                      <div className="mr-2">
                          <span className="text-2xl font-bold text-white">
                              {timeRemaining.hours}
                          </span>
                          <span className="text-sm text-gray-300 ml-1">h</span>
                      </div>
                      <div className="mr-2">
                          <span className="text-2xl font-bold text-white">
                              {timeRemaining.minutes}
                          </span>
                          <span className="text-sm text-gray-300 ml-1">m</span>
                      </div>
                      <div>
                          <span className="text-2xl font-bold text-white">
                              {timeRemaining.seconds}
                          </span>
                          <span className="text-sm text-gray-300 ml-1">s</span>
                      </div>
                  </div>
              </div>
          )}
      </>
  );
}

export default Timer