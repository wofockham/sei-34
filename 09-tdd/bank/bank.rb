class Bank
  attr_reader :name, :accounts

  def initialize(n)
    @name = n
    @accounts = {}
  end

  def create_account(name, deposit)
    @accounts[name] = deposit
  end
end
