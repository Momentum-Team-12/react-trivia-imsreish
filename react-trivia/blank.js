// ATTEMPTED syntax:

return (
    <div>
        <p>Results go here:</p>
        {apiResults && apiResults.length ?
            apiResults.map((apiResult, index) => (
            return (
        <div key={index}>
            <p>{index}</p>
        </div>
        )) : null}
    </div>
)
        )
    })}
</div >
)


return (
    <div>
        <p>Results go here:</p>
        {apiResults && apiResults.length ?
            apiResults.map((apiResult, index) => {
                return (
                    <div key={index}>
                        <p>{index}</p>
                        {apiResult.content.map((eachCat) => (
                            <div key={eachCat.index}>
                                <h1>{eachCat.category}</h1>
                            </div>
                        ))}
                    </div>
                )
            })}
    </div>
)