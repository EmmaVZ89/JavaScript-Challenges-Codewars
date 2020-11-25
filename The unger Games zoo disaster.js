var whoEatsWho = function(zoo) {
  const relation = {
    antelope: ['grass'],
    'big-fish': ['little-fish'],
    bug: ['leaves'],
    bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
    chicken: ['bug'],
    cow: ['grass'],
    fox: ['chicken', 'sheep'],
    giraffe: ['leaves'],
    lion: ['antelope', 'cow'],
    panda: ['leaves'],
    sheep: ['grass']
  }

  let res = [zoo]
  zoo = zoo.split(',')

  let isRelation = (x, y) => relation[x] && relation[x].includes(y)
  let checkAndRemove = (zoo, i, j) => {
    if (isRelation(zoo[i], zoo[j])) {
      res.push(zoo[i] + ' eats ' + zoo[j])
      return zoo.splice(j, 1)
    }
    return false
  }

  while (zoo.some((x, i) => checkAndRemove(zoo, i, i-1) || checkAndRemove(zoo, i, i+1)));
  res.push(zoo + '')
  return res
}
