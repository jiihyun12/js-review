const changeToHangle = (nums) => {
    let hangles = "공일이삼사오육칠팔구"
    let result = ""

    for(let i = 0; i < nums.length; i++){
        result += hangles.charAt(nums.charAt(i))
    }
    return result
}

console.log(changeToHangle("1000"))