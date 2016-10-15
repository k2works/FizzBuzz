class FizzBuzz
  def execute
    arr = []
    (1..100).each do |n|
      if n%3 == 0
        if n%5 == 0
          arr << 'FizzBuzz'
        else
          arr << 'Fizz'
        end
      elsif n%5 == 0
        if n%3 == 0
          arr << 'FizzBuzz'
        else
          arr << 'Buzz'
        end
      else
        arr << n
      end
    end
    arr
  end
end
