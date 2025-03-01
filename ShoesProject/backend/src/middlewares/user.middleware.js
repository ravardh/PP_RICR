export const userLog = (req, res, next) => {
    
  console.log(`Test Request is executed for user ${req.url} with ${req.method} Method at ${new Date().toISOString()}`);

  next();
};
